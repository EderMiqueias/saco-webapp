class OrdemServicoVO:
    def __init__(self, id_os, entrada, saida):
        self.id = id_os
        self.entrada = entrada
        self.saida = saida

    def get_json(self) -> dict:
        return {
            "id": self.id,
            "entrada": self.entrada,
            "saida": self.saida
        }
