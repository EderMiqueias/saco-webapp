from app.model.DAO.base_dao import BaseDAO
from app.model.VO.cliente_vo import ClienteVO


class ClienteDAO(BaseDAO):
    def insert(self, values):
        query = "INSERT INTO cliente (cpf_cnpj, endereco, nome, id_tipo_cliente, rg, telefone) " \
                "VALUES (%s, %s, %s, %s, %s, %s)"
        self.cursor.execute(query, values)
        self.commit()

    def select_all(self):
        query = '''SELECT c.id,
                            cpf_cnpj,
                            endereco,
                            nome,
                            id_tipo_cliente,
                            tc.tipo as tipo,
                            rg,
                            telefone
                    FROM cliente c
                    LEFT JOIN tipo_cliente tc ON c.id_tipo_cliente = tc.id'''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(ClienteVO(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7]) for c in result)

    def select_tipos(self):
        query = 'select * from tipo_cliente'
        self.cursor.execute(query)
        result = self.cursor.fetchall()

        return list(
            {
                'id': tipo[0],
                'tipo': tipo[1]
            } for tipo in result)

    def commit(self):
        self.conn.commit()
