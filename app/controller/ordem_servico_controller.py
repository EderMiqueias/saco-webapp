from app import app
from flask import request
from app.model.DAO.ordem_servico_dao import OrdemServicoDAO


@app.route("/ordem_servico", methods=["GET"])
def get_ordem_servico():
    dao = OrdemServicoDAO()
    results = list(os.get_json() for os in dao.select_all())

    return {
        'message': 'success',
        'response': results
    }


@app.route("/ordem_servico", methods=["POST"])
def post_ordem_servico():
    dao = OrdemServicoDAO()
    j = request.get_json()
    dao.insert((
        j["entrada"],
        j["saida"]
    ))
    return {
        'message': 'success',
        'response': j
    }


@app.route("/ordem_servico", methods=["PUT"])
def put_ordem_servico():
    dao = OrdemServicoDAO()
    j = request.get_json()
    dao.update((
        j["saida"],
        j["id"]
    ))
    return {
        'message': 'success',
        'response': j
    }
