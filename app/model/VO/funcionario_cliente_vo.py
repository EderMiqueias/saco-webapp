# g-2) Quais são nossos Funcionários que também são clientes?

class FuncionarioClienteVO:
    def __init__(self, id_c, nome, especialidade):
        self.id = id_c
        self.nome = nome
        self.especialidade = especialidade

    def get_json(self) -> dict:
        return {
            "id": self.id,
            "nome": self.nome,
            "especialidade": self.especialidade
        }
