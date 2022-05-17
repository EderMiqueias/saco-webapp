import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CardTipoServico from '../components/template/CardTipoServico';
import api from '../services/api'

export default class TipoServico extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: [], descricao: null, valor: null}

        this.refresh();
        this.registrar = this.registrar.bind(this);
    }

    refresh() {
        api.getTipoServico()
            .then((resp) => {this.setState({
                ...this.state,
                list: resp.data.response.map((ts) => {
                    return (
                        <CardTipoServico
                            key={ts.id}
                            id={ts.id}
                            descricao={ts.descricao}
                            valor={ts.valor}
                        />
                    );
                })
            })})
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
                    <h1 className="title">Tipos de Serviço</h1><br />
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
                <div className="Polos">
                    {this.state.list}
                </div>
            </div>
        );
    }
}
