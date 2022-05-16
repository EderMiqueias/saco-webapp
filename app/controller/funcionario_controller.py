from app import app
from flask import request
from app.model.DAO.funcionario_dao import FuncionarioDAO


@app.route("/funcionario", methods=["GET"])
def get_funcionario():
    dao = FuncionarioDAO()
    results = list(f.get_json() for f in dao.select_all())

    return {
        'message': 'success',
        'response': results
    }


@app.route("/funcionario", methods=["POST"])
def post_funcionario():
    dao = FuncionarioDAO()
    j = request.get_json()

    dao.insert((j["nome"],
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


@app.route("/funcionario", methods=["DELETE"])
def delete_funcionario():
    dao = FuncionarioDAO()
    j = request.get_json()
    deletado = list(f.get_json() for f in dao.select(str(j["id"])))
    dao.delete(str(j["id"]))
    return {
        'message': 'success',
        'response': deletado
    }
