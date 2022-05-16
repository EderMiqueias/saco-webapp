from app import app

# IMPORTS ABAIXO INSTANCIAM OS CONTROLLERS
from app.controller.tipo_servico_controller import get_tipo_servico
from app.controller.funcionario_controller import get_funcionario
from app.controller.cliente_controller import get_cliente
from  app.controller.ordem_servico_controller import get_ordem_servico

app.run(debug=True)
