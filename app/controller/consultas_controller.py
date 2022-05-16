from app import app
from flask import request
from app.model.DAO.funcionario_dao import FuncionarioDAO
from app.model.DAO.consultas_dao import ConsultasDAO


@app.route("/consultas", methods=["GET"])
def get_consultas():
    dao_f = FuncionarioDAO()
    dao = ConsultasDAO()

    # g-1) Quais são nossos Funcionários? Mostrar os dados do funcionário.
    result_1 = list(f.get_json() for f in dao_f.select_all())

    # g-2) Quais são nossos Funcionários que também são clientes?
    result_2 = list(fc.get_json() for fc in dao.select_fc())

    # g-3) Quantos funcionários ganham mais que a média de salários de todos os funcionários
    # admitidos a partir de 2020?
    result_3 = list(f.get_json() for f in dao_f.acima_media())

    # g-4) Qual é a marca e modelo de veículo mais atendidos pela oficina?
    result_4 = list(mc.get_json() for mc in dao.select_mc())

    # g-6) Quais são os dez Clientes para os quais as ordens de serviço demandaram maior tempo na
    # oficina (por ordem do maior para o menor tempo).
    result_6 = list(e.get_json() for e in dao.get_espera())

    # g-8) Existe algum mecânico que participou de todos os consertos executados pela oficina?
    result_8 = list(f.get_json() for f in dao.get_mecanicos_part())

    # g-10) Quais são os funcionários que recebem o mesmo salário?
    result_10 = list(f.get_json() for f in dao_f.mesmo_salario())

    return {
        'message': 'success',
        'response': {
            "Funcionarios": result_1,
            "Funcionarios_clientes": result_2,
            "Funcionarios_acima_media": result_3,
            "Marca_modelo_mais_atendidos": result_4,
            "Maior_espera": result_6,
            "Mecanico_part_all_servicos": result_8,
            "Funcionarios_mesmo_salario": result_10
        }
    }


@app.route("/consultas", methods=["POST"])
def post_consultas():
    dao = ConsultasDAO()
    j = request.get_json()

    # g-5) Quais são os itens de serviço dado um determinado serviço?
    result_5 = list(i.get_json() for i in dao.get_item_servico(str(j["id"])))
    return {
        'message': 'success',
        'response': result_5
    }