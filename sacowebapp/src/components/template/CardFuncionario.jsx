import React from 'react';

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
            telefone: props.telefone
        }
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
            </div>
        );
    }
}

export default CardFuncionario;
