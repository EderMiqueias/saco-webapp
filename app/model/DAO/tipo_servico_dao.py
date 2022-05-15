from app.model.DAO.base_dao import BaseDAO
from app.model.VO.tipo_servico_vo import TipoServicoVO


class TipoServicoDAO(BaseDAO):
    def insert(self, values):
        query = "INSERT INTO tipo_servico (descricao, valor) VALUES (%s, %s)"
        self.cursor.execute(query, values)
        self.commit()

    def select_all(self):
        query = 'SELECT * FROM tipo_servico'
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(TipoServicoVO(ts[0], ts[1], ts[2]) for ts in result)

    def commit(self):
        self.conn.commit()
