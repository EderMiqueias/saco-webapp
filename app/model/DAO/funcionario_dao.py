from app.model.DAO.base_dao import BaseDAO
from app.model.VO.funcionario_vo import FuncionarioVO

class FuncionarioDAO(BaseDAO):
    def insert(self, values):
        query = "INSERT INTO funcionario (nome, telefone, rg, cpf, id_especialidade, salario, data_admissao) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        self.cursor.execute(query, values)
        self.commit()

    def select_all(self):
        query = 'SELECT * FROM funcionario'
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        return list(FuncionarioVO(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]) for f in result)

    def commit(self):
        self.conn.commit()

