import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CardOrdemServico from '../components/template/CardOrdemServico';
import api from '../services/api'

export default class OrdensServico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            entrada: undefined,
            saida: undefined,
            id_selected: undefined,
            saida_put: undefined
        }

        this.refresh();
        this.registrar = this.registrar.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }

    refresh() {
        api.getOrdens()
            .then((resp) => {
                this.setState({
                    ...this.state,
                    list: resp.data.response.map((ts) => {
                        return (
                            <CardOrdemServico
                                key={ts.id}
                                id={ts.id}
                                entrada={ts.entrada}
                                saida={ts.saida}
                            />
                        );
                    })
                })
            })
            .catch((err) => {
                console.error("ops! não posso conectar a api " + err);
            });
    }



    registrar() {
        const data = {
            entrada: this.state.entrada,
            saida: this.state.saida
        }
        api.postOrdens(data)
            .then((resp) => {
                if (resp.status === 201) {
                    this.refresh()
                }
            })
    }

    atualizar() {
        const data = {
            id: this.state.id_selected,
            saida: this.state.saida_put
        }
        api.putOrdens(data)
            .then((resp) => {
                if (resp.status === 200) {
                    this.refresh()
                }
            })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="title">Ordens de Serviço</h1><br />
                </div>
                <div>
                    <h4>Inserção</h4>
                    <form>
                        <TextField
                            id="entrada"
                            margin="normal"
                            label="Entrada"
                            InputLabelProps={{ shrink: true }}
                            required
                            type="datetime-local"
                            defaultValue={this.state.entrada}
                            onChange={(e) => this.setState({
                                ...this.state,
                                entrada: e.target.value
                            })}
                        />
                        <TextField
                            id="saida"
                            margin="normal"
                            label="Saída"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            required
                            defaultValue={this.state.saida}
                            onChange={(e) => this.setState({
                                ...this.state,
                                saida: e.target.value
                            })}
                        />
                        <Button color="primary" onClick={this.registrar}>
                            Registrar
                        </Button>
                    </form>
                </div>
                <div>
                    <h4>Atualização</h4>
                    <form>
                        <TextField
                            id="id_selected"
                            margin="normal"
                            label="ID da OS"
                            InputLabelProps={{ shrink: true }}
                            required
                            type="number"
                            defaultValue={this.state.id_selected}
                            onChange={(e) => this.setState({
                                ...this.state,
                                id_selected: e.target.value
                            })}
                        />
                        <TextField
                            id="saida_put"
                            margin="normal"
                            label="Saída"
                            type="datetime-local"
                            InputLabelProps={{ shrink: true }}
                            required
                            defaultValue={this.state.saida_put}
                            onChange={(e) => this.setState({
                                ...this.state,
                                saida_put: e.target.value
                            })}
                        />
                        <Button color="primary" onClick={this.atualizar}>
                            Atualizar
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
