import React from 'react';

class CardOrdemServico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            entrada: props.entrada,
            saida: props.saida,
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
                        <li>ENTRADA: {this.state.entrada}</li>
                        <li>SAIDA: {this.state.saida}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardOrdemServico;
