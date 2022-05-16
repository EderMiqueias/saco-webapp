# g-6) Quais são os dez Clientes para os quais as ordens de serviço demandaram maior tempo na
# oficina (por ordem do maior para o menor tempo).

class EsperaVO:
    def __init__(self, id_os, nome, espera):
        self.id_os = id_os
        self.nome = nome
        self.espera = espera

    def get_json(self) -> dict:
        return {
            "id_os": self.id_os,
            "nome": self.nome,
            "espera": self.espera
        }
