# g-4) Qual é a marca e modelo de veículo mais atendidos pela oficina?

class MarcaModeloVO:
    def __init__(self, tipo, descricao, n_veiculos):
        self.tipo = tipo
        self.descricao = descricao
        self.n_veiculos = n_veiculos

    def get_json(self) -> dict:
        return {
            "tipo": self.tipo,
            "descricao": self.descricao,
            "n_veiculos": self.n_veiculos
        }
