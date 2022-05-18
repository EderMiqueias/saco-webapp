import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import api from '../services/api'
import CardFuncionario from '../components/template/CardFuncionario';

export default class Funcionarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list_funcionarios: [],
            list_funcionarios_acima_media: [],
            list_funcionarios_cliente: [],
            list_funcionarios_mesmo_salario: [],
            especialidades: [],
            nome: '',
            telefone: '',
            rg: '',
            cpf: '',
            id_especialidade: 1,
            salario: 1000
        }

        this.refresh();
        this.registrar = this.registrar.bind(this);
    }

    getCardFuncionario(funcionario, shouldDelete = false) {
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
                shouldDelete={shouldDelete}
            />
        )
    }

    refresh() {
        api.getConsultas()
            .then((resp) => {
                this.setState({
                    ...this.state,
                    list_funcionarios: resp.data.response.Funcionarios.map((ts) => {
                        return (this.getCardFuncionario(ts, true));
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
                api.getEspecialidades()
                    .then((resp) => {
                        this.setState({
                            ...this.state,
                            especialidades: resp.data.response
                        })
                    })
                    .catch((err) => {
                        console.error("ops! não posso conectar a api " + err);
                    });
            })
            .catch((err) => {
                console.error("ops! não posso conectar a api " + err);
            });
    }



    registrar() {
        const data = {
            nome: this.state.nome,
            telefone: this.state.telefone,
            rg: this.state.rg,
            cpf: this.state.cpf,
            id_especialidade: this.state.id_especialidade,
            salario: this.state.salario,
            data_admissao: new Date().toISOString().split('T')[0]
        }
        api.postFuncionario(data)
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
                            id="nome"
                            margin="dense"
                            label="Nome"
                            required
                            defaultValue={this.state.nome}
                            onChange={(e) => this.setState({
                                ...this.state,
                                nome: e.target.value
                            })}
                        />
                        <TextField
                            id="telefone"
                            margin="dense"
                            label="Telefone"
                            required
                            defaultValue={this.state.telefone}
                            onChange={(e) => this.setState({
                                ...this.state,
                                telefone: e.target.value
                            })}
                        />
                        <TextField
                            id="rg"
                            margin="dense"
                            label="RG"
                            required
                            defaultValue={this.state.rg}
                            onChange={(e) => this.setState({
                                ...this.state,
                                rg: e.target.value
                            })}
                        />
                        <TextField
                            id="cpf"
                            margin="dense"
                            label="CPF"
                            required
                            defaultValue={this.state.cpf}
                            onChange={(e) => this.setState({
                                ...this.state,
                                cpf: e.target.value
                            })}
                        />
                        <TextField
                            id="salario"
                            margin="dense"
                            label="Salário"
                            required
                            defaultValue={this.state.salario}
                            type="number"
                            onChange={(e) => this.setState({
                                ...this.state,
                                salario: e.target.value
                            })}
                        />
                        <Select
                            labelId="label_b"
                            id="id_b"
                            value={this.state.id_especialidade}
                            style={{width: 100}}
                            onChange={(e) => this.setState({
                                ...this.state,
                                id_especialidade: e.target.value
                            })}
                        >
                            {this.state.especialidades.map((esp) => (
                                <MenuItem key={esp.id} value={esp.id}>{esp.descricao}</MenuItem>
                            ))}
                        </Select>
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
