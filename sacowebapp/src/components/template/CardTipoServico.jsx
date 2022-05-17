import React from 'react';

class CardTipoServico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            descricao: props.descricao,
            valor: props.valor,
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
                        <li>DESCRIÇÃO: {this.state.descricao}</li>
                        <li>VALOR: {this.state.valor}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardTipoServico;
