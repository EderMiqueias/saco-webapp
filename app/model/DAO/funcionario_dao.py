from app.model.DAO.base_dao import BaseDAO
from app.model.VO.funcionario_vo import FuncionarioVO


class FuncionarioDAO(BaseDAO):
    def insert(self, values):
        query = "INSERT INTO funcionario (nome, telefone, rg, cpf, id_especialidade, salario, data_admissao) " \
                "VALUES (%s, %s, %s, %s, %s, %s, %s)"
        self.cursor.execute(query, values)
        self.commit()

    def select_all(self):
        query = '''
                SELECT 	f.id,
                        nome,
                        telefone,
                        rg,
                        cpf,
                        id_especialidade,
                        e.descricao as especialidade,
                        salario,
                        data_admissao
                FROM funcionario f
                LEFT JOIN especialidade e ON f.id_especialidade = e.id
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(FuncionarioVO(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]) for f in result)

    def select_especialidade(self):
        query = 'SELECT * FROM especialidade'
        self.cursor.execute(query)
        result = self.cursor.fetchall()

        return list(
            {
                'id': esp[0],
                'descricao': esp[1]
            } for esp in result)

    def select(self, value):
        query = '''
                SELECT 	f.id,
                        nome,
                        telefone,
                        rg,
                        cpf,
                        id_especialidade,
                        e.descricao as especialidade,
                        salario,
                        data_admissao
                FROM funcionario f
                LEFT JOIN especialidade e ON f.id_especialidade = e.id
                WHERE f.id = %s
                ''' % value
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(FuncionarioVO(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]) for f in result)

    def delete(self, values):
        query = "DELETE FROM funcionario WHERE id = %s" % values
        self.cursor.execute(query)
        self.commit()

    def acima_media(self):
        query = '''
                SELECT 	f.id,
                        nome,
                        telefone,
                        rg,
                        cpf,
                        id_especialidade,
                        e.descricao as especialidade,
                        salario,
                        data_admissao
                FROM funcionario f
                LEFT JOIN especialidade e ON f.id_especialidade = e.id
                WHERE salario > (	
                                SELECT AVG(salario) 
                                FROM saco.funcionario
                                WHERE YEAR(data_admissao) > 2020
                                )
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(FuncionarioVO(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]) for f in result)

    def mesmo_salario(self):
        query = '''
                SELECT 	f.id,
                        nome,
                        telefone,
                        rg,
                        cpf,
                        id_especialidade,
                        e.descricao as especialidade,
                        f.salario,
                        data_admissao
                FROM funcionario f
                LEFT JOIN especialidade e ON f.id_especialidade = e.id
                INNER JOIN (
                    SELECT salario, 
                            COUNT(*) AS cnt 
                    FROM funcionario
                    GROUP BY salario
                    HAVING cnt > 1) f_in ON f.salario = f_in.salario
                ORDER BY salario
                '''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(FuncionarioVO(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]) for f in result)

    def commit(self):
        self.conn.commit()
