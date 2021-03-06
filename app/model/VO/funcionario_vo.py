class FuncionarioVO:
    def __init__(self, id_f, nome, telefone, rg, cpf, id_especialidade, especialidade, salario, data_admissao):
        self.id = id_f
        self.nome = nome
        self.telefone = telefone
        self.rg = rg
        self.cpf = cpf
        self.id_especialidade = id_especialidade
        self.especialidade = especialidade
        self.salario = salario
        self.data_admissao = data_admissao

    def get_json(self) -> dict:
        return {
            "id": self.id,
            "nome": self.nome,
            "telefone": self.telefone,
            "rg": self.rg,
            "cpf": self.cpf,
            "especialidade": {
                                "id" : self.id_especialidade,
                                "descricao" : self.especialidade
                                },
            "salario": self.salario,
            "data_admissao": self.data_admissao
        }

