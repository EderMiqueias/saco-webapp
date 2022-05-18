import React from 'react';

class CardCliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            nome: props.nome,
            rg: props.rg,
            cpf:props.cpf,
            telefone: props.telefone,
            tipo: props.tipo
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
                        <li>NOME: {this.state.nome}</li>
                        <li>RG: {this.state.rg}</li>
                        <li>CPF: {this.state.cpf}</li>
                        <li>TELEFONE: {this.state.telefone}</li>
                        <li>TIPO: {this.state.tipo.descricao}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardCliente;
