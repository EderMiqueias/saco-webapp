from app import app
from app.controller.funcionario_controller import get_funcionario
# IMPORTS ABAIXO INSTANCIAM OS CONTROLLERS
from app.controller.tipo_servico_controller import get_tipo_servico

app.run(debug=True)
