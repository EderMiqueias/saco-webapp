# g-5) Quais são os itens de serviço dado um determinado serviço?

class ItemServicoVO:
    def __init__(self, id, id_funcionario, id_servico):
        self.id = id
        self.id_funcionario = id_funcionario
        self.id_servico = id_servico

    def get_json(self) -> dict:
        return {
            "id": self.id,
            "id_funcionario": self.id_funcionario,
            "id_servico": self.id_servico
        }
