class ClienteVO:
    def __init__(self, id_c, cpf, endereco, nome, id_tipo_cliente, tipo_cliente, rg, telefone):
        self.id = id_c
        self.cpf = cpf
        self.endereco = endereco
        self.id_tipo_cliente = id_tipo_cliente
        self.tipo_cliente = tipo_cliente
        self.rg = rg
        self.nome = nome
        self.telefone = telefone


    def get_json(self) -> dict:
        return {
            "id": self.id,
            "nome": self.nome,
            "telefone": self.telefone,
            "rg": self.rg,
            "cpf": self.cpf,
            "tipo_cliente": {
                                "id" : self.id_tipo_cliente,
                                "descricao" : self.tipo_cliente
                                },
        }
