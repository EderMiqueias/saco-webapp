import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import CardCliente from '../components/template/CardCliente';
import api from '../services/api'

export default class Clientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            tipos: [],
            cpf: '',
            endereco: '',
            nome: '',
            id_tipo_cliente: 1,
            rg: '',
            telefone: ''
        }

        this.refresh();
        this.registrar = this.registrar.bind(this);
    }

    refresh() {
        api.getClientes()
            .then((resp) => {
                this.setState({
                    ...this.state,
                    list: resp.data.response.map((ts) => {
                        return (
                            <CardCliente
                                key={ts.id}
                                id={ts.id}
                                telefone={ts.telefone}
                                nome={ts.nome}
                                rg={ts.rg}
                                cpf={ts.cpf}
                                tipo={ts.tipo_cliente}
                            />
                        );
                    })
                })
                api.getTiposCliente()
                    .then((resp) => {
                        this.setState({
                            ...this.state,
                            tipos: resp.data.response
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
            cpf: this.state.cpf,
            endereco: this.state.endereco,
            nome: this.state.nome,
            id_tipo_cliente: this.state.id_tipo_cliente,
            rg: this.state.rg,
            telefone: this.state.telefone
        }
        api.postClientes(data)
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
                    <h1 className="title">Clientes</h1><br />
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
                        <Select
                            labelId="label_a"
                            id="id_a"
                            value={this.state.id_tipo_cliente}
                            style={{ width: 100 }}
                            onChange={(e) => this.setState({
                                ...this.state,
                                id_tipo_cliente: e.target.value
                            })}
                        >
                            {this.state.tipos.map((esp) => (
                                <MenuItem key={esp.id} value={esp.id}>{esp.tipo}</MenuItem>
                            ))}
                        </Select>
                        <Button color="primary" onClick={this.registrar}>
                            Registrar
                        </Button>
                    </form>
                </div>
                <div className="Polos">
                    {this.state.list}
                </div>
            </div>
        );
    }
}
