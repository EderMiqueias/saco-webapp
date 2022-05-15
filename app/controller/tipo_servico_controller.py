from app import app
from app.model.DAO.tipo_servico_dao import TipoServicoDAO


@app.route("/tipo-servico")
def get_tipo_servico():
    dao = TipoServicoDAO()
    results = list(ts.get_json() for ts in dao.select_all())

    return {
        'message': 'success',
        'response': results
    }
