class DistanciaVO:
    def __init__(self, nome, distancia):
        self.nome = nome
        self.distancia = distancia

    def get_json(self) -> dict:
        return {
            "nome": self.nome,
            "distancia": self.distancia
        }
