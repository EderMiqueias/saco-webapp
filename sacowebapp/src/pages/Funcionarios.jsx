import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from '../services/api'
import CardFuncionario from '../components/template/CardFuncionario';

export default class Funcionarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_funcionarios: [],
            list_funcionarios_acima_media: [],
            list_funcionarios_cliente: [],
            list_funcionarios_mesmo_salario: []
        }

        this.refresh();
        this.registrar = this.registrar.bind(this);
    }

    getCardFuncionario(funcionario) {
        return (
            <CardFuncionario
                key={funcionario.id}
                id={funcionario.id}
                cpf={funcionario.cpf}
                data_admissao={funcionario.data_admissao}
                especialidade={funcionario.especialidade}
                nome={funcionario.nome}
                rg={funcionario.rg}
                salario={funcionario.salario}
                telefone={funcionario.telefone}
            />
        )
    }

    refresh() {
        api.getConsultas()
            .then((resp) => {
                this.setState({
                    ...this.state,
                    list_funcionarios: resp.data.response.Funcionarios.map((ts) => {
                        return (this.getCardFuncionario(ts));
                    }),
                    list_funcionarios_acima_media: resp.data.response.Funcionarios_acima_media.map((ts) => {
                        return (this.getCardFuncionario(ts));
                    }),
                    list_funcionarios_cliente: resp.data.response.Funcionarios_clientes.map((ts) => {
                        return (this.getCardFuncionario(ts));
                    }),
                    list_funcionarios_mesmo_salario: resp.data.response.Funcionarios_mesmo_salario.map((ts) => {
                        return (this.getCardFuncionario(ts));
                    })
                })
            })
            .catch((err) => {
                console.error("ops! não posso conectar a api " + err);
            });
    }



    registrar() {
        const data = {
            descricao: this.state.descricao,
            valor: this.state.valor
        }
        api.postTipoServico(data)
            .then((resp) => {
                if (resp.status === 201) {
                    this.refresh()
                }
            })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="title">Funcionários</h1><br />
                </div>
                <div>
                    <h4>Inserção</h4>
                    <form>
                        <TextField
                            id="descricao"
                            margin="dense"
                            label="Descrição"
                            required
                            defaultValue={this.state.descricao}
                            onChange={(e) => this.setState({
                                ...this.state,
                                descricao: e.target.value
                            })}
                        />
                        <TextField
                            id="valor"
                            margin="dense"
                            label="Valor"
                            type="number"
                            required
                            defaultValue={this.state.descricao}
                            onChange={(e) => this.setState({
                                ...this.state,
                                valor: e.target.value
                            })}
                        />
                        <Button color="primary" onClick={this.registrar}>
                            Registrar
                        </Button>
                    </form>
                </div>
                <h4>Todos os Funcionários</h4>
                <div className="Polos">
                    {this.state.list_funcionarios}
                </div>
                <h4>Funcionários Com Salário Acima da Média</h4>
                <div className="Polos">
                    {this.state.list_funcionarios_acima_media}
                </div>
                <h4>Funcionários Que Também são Clientes</h4>
                <div className="Polos">
                    {this.state.list_funcionarios_cliente}
                </div>
                <h4>Funcionários Com o Mesmo Salário</h4>
                <div className="Polos">
                    {this.state.list_funcionarios_mesmo_salario}
                </div>
            </div>
        );
    }
}
