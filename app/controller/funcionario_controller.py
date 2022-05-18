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


@app.route("/especialidade", methods=["GET"])
def get_especialidade():
    dao = FuncionarioDAO()
    results = dao.select_especialidade()

    return {
        'message': 'success',
        'response': results
    }


@app.route("/funcionario", methods=["POST"])
def post_funcionario():
    dao = FuncionarioDAO()
    j = request.get_json()
    print(j['data_admissao'])

    dao.insert((j["nome"],
                j["telefone"],
                j["rg"],
                j["cpf"],
                j["id_especialidade"],
                j["salario"],
                j["data_admissao"])
               )
    return {
        'message': 'success',
        'response': j
    }, 201


@app.route("/funcionario/<int:id>", methods=["DELETE"])
def delete_funcionario(id):
    dao = FuncionarioDAO()
    deletado = list(f.get_json() for f in dao.select(str(id)))
    dao.delete(str(id))
    return {
        'message': 'success',
        'response': deletado
    }
