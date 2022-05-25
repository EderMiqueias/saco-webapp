class FaturamentoVO:
    def __init__(self, id_o, nome, valor):
        self.id = id_o
        self.nome = nome
        self.valor = valor

    def get_json(self) -> dict:
        return {
            "id": self.id,
            "nome": self.nome,
            "valor": self.valor
        }
