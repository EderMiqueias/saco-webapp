import React from 'react';
import Button from '@material-ui/core/Button';
import api from '../../services/api';

class CardFuncionario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            cpf: props.cpf,
            data_admissao: props.data_admissao,
            especialidade: props.especialidade,
            nome: props.nome,
            rg: props.rg,
            salario: props.salario,
            telefone: props.telefone,
            refresh: props.refresh
        }
        this.deletar = this.deletar.bind(this);
    }

    deletar() {
        api.deleteFuncionario(this.state.id)
    }


    render() {
        return (
            <div
                className="Card Polo"
                style={{ borderColor: 'gray' }}
            >
                <div className="Content">
                    <ul>
                        <li>ID: {this.state.id}</li>
                        <li>CPF: {this.state.cpf}</li>
                        <li>DATA ADMISSÃO: {this.state.data_admissao}</li>
                        <li>ESPECIALIDADE: {this.state.especialidade.descricao}</li>
                        <li>NOME: {this.state.nome}</li>
                        <li>RG: {this.state.rg}</li>
                        <li>SALARIO: {this.state.salario}</li>
                        <li>TELEFONE: {this.state.telefone}</li>
                    </ul>
                </div>
                {this.props.shouldDelete && (
                    <Button color="primary" onClick={this.deletar}>
                        Deletar
                    </Button>
                )}
            </div>
        );
    }
}

export default CardFuncionario;
