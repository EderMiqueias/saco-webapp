# g-8) Existe algum mecânico que participou de todos os consertos executados pela oficina?

class FuncionarioPartVO:
    def __init__(self, id_f, servicos):
        self.id_f = id_f
        self.servicos = servicos

    def get_json(self) -> dict:
        return {
            "id_f": self.id_f,
            "servicos": self.servicos
        }
