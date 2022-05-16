from app import app
from app.model.DAO.funcionario_dao import FuncionarioDAO


@app.route("/funcionario")
def get_funcionario():
    dao = FuncionarioDAO()
    results = list(f.get_json() for f in dao.select_all())

    return {
        'message': 'success',
        'response': results
    }