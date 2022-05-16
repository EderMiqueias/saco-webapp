from app.model.DAO.base_dao import BaseDAO
from app.model.VO.funcionario_cliente_vo import FuncionarioClienteVO
from app.model.VO.maraca_modelo_vo import MarcaModeloVO
from app.model.VO.item_servico_vo import ItemServicoVO
from app.model.VO.espera_vo import EsperaVO


class ConsultasDAO(BaseDAO):
    def select_fc(self):  # g-2) Quais são nossos Funcionários que também são clientes?
        query = '''
                SELECT 
                    c.id as id_cliente,
                    f_out.nome,
                    f_out.especialidade
                FROM (
                    SELECT 
                        f.nome,
                        f.cpf,
                        e.descricao as especialidade
                    FROM funcionario f
                    LEFT JOIN especialidade e ON f.id_especialidade = e.id
                    ) as f_out
                INNER JOIN saco.cliente c ON f_out.cpf = c.cpf_cnpj
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(FuncionarioClienteVO(fc[0], fc[1], fc[2]) for fc in result)

    def select_mc(self): # g-4) Qual é a marca e modelo de veículo mais atendidos pela oficina?
        query = '''
                SELECT * 
                FROM(
                    SELECT 	
                            'Marca' as tipo,
                            v.marca as descricao,
                            COUNT(v.marca) AS n_veiculos
                    FROM veiculo v
                    GROUP BY v.marca
                    ORDER BY COUNT(v.marca) DESC
                    LIMIT 1
                    ) a
                UNION ALL
                SELECT * 
                FROM(
                    SELECT 	
                            'Modelo' as tipo,
                            v2.modelo as descricao,
                            COUNT(v2.modelo) AS n_veiculos
                    FROM veiculo v2
                    GROUP BY v2.modelo
                    ORDER BY COUNT(v2.modelo) DESC
                    LIMIT 1
                    ) b
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(MarcaModeloVO(mc[0], mc[1], mc[2]) for mc in result)

    def get_item_servico(self, value): # g-5) Quais são os itens de serviço dado um determinado serviço?
        query = '''
                SELECT * 
                FROM saco.item_servico 
                WHERE id = %s
                ''' %value
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(ItemServicoVO(i[0], i[1], i[2]) for i in result)

    def get_espera(self):
        query = '''
                SELECT 
                        os.id as id_os, 
                        TIME_FORMAT(TIMEDIFF(saida, entrada), '%H horas e %i minutos') as espera,
                        c.nome
                FROM ordem_servico os
                LEFT JOIN item_ficha_cliente ifc ON os.id = ifc.id_os
                LEFT JOIN ficha_cliente fc ON ifc.id_ficha_cliente = fc.id
                LEFT JOIN cliente c ON fc.id_cliente = c.id
                ORDER BY espera DESC
                LIMIT 10
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(EsperaVO(e[0], e[1], e[2]) for e in result)

    def fucionario_all(self):
        query_funcionarios = '''
                SELECT id_funcionario 
                FROM item_servico
                GROUP BY id_servico, id_funcionario 
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()

