from flask import request

from app import app
from app.model.DAO.tipo_servico_dao import TipoServicoDAO


@app.route("/tipo-servico", methods=["GET", "POST"])
def get_tipo_servico():
    dao = TipoServicoDAO()

    if request.method == 'GET':
        results = list(ts.get_json() for ts in dao.select_all())

        return {
            'message': 'success',
            'response': results
        }

    if request.method == 'POST':
        j = request.get_json()
        dao.insert((j['descricao'], j['valor']))

        return {
            'message': 'success'
        }, 201


