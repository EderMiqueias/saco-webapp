from app.model.DAO.base_dao import BaseDAO
from app.model.VO.ordem_servico_vo import OrdemServicoVO


class OrdemServicoDAO(BaseDAO):
    def insert(self, values):
        query = "INSERT INTO ordem_servico (entrada, saida) " \
                "VALUES (%s, %s)"
        self.cursor.execute(query, values)
        self.commit()

    def select_all(self):
        query = '''SELECT * FROM ordem_servico'''
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(OrdemServicoVO(os[0], os[1], os[2]) for os in result)

    def update(self, values):
        query = "UPDATE ordem_servico SET saida = %s WHERE id = %s"
        self.cursor.execute(query, values)
        self.commit()

    def commit(self):
        self.conn.commit()