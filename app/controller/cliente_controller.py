from app import app
from flask import request
from app.model.DAO.cliente_dao import ClienteDAO


@app.route("/cliente", methods=["GET"])
def get_cliente():
    dao = ClienteDAO()
    results = list(c.get_json() for c in dao.select_all())

    return {
        'message': 'success',
        'response': results
    }


@app.route("/tipo-cliente", methods=["GET"])
def get_tipos_cliente():
    dao = ClienteDAO()
    results = dao.select_tipos()

    return {
        'message': 'success',
        'response': results
    }


@app.route("/cliente", methods=["POST"])
def post_cliente():
    dao = ClienteDAO()
    j = request.get_json()

    dao.insert((    j["cpf"],
                    j["endereco"],
                    j["nome"],
                    j["id_tipo_cliente"],
                    j["rg"],
                    j["telefone"]
               ))
    return {
        'message': 'success',
        'response': j
    }, 201

