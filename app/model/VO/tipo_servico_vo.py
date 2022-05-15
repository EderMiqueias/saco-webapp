class TipoServicoVO:
    def __init__(self, id_ts, descricao, valor):
        self.id = id_ts
        self.descricao = descricao
        self.valor = valor

    def get_json(self) -> dict:
        return {
            "id": self.id,
            "descricao": self.descricao,
            "valor": self.valor
        }
