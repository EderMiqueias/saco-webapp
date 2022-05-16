from app import app
from flask import request
from app.model.DAO.funcionario_dao import FuncionarioDAO


@app.route("/funcionario", methods=["GET", "POST"])
def get_funcionario():
    dao = FuncionarioDAO()
    if request.method == "POST":
        j = request.get_json()

        dao.insert((    j["nome"],
                        j["telefone"],
                        j["rg"],
                        j["cpf"],
                        j["id_especialidade"],
                        j["salario"],
                        j["data_adimissao"])
                   )
        return {
            'message': 'success',
            'response': j
        }

    else:
        results = list(f.get_json() for f in dao.select_all())

        return {
            'message': 'success',
            'response': results
        }