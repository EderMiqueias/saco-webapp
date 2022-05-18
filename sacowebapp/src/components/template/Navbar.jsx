import React from 'react'

import ItemNavbar from './ItemNavbar'

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <ItemNavbar content="Inicío" src="/"/>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <ItemNavbar content="Clientes" src="/clientes"/>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <ItemNavbar content="Funcionários" src="/funcionarios"/>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <ItemNavbar content="Tipos de Serviço" src="/tipo-servico"/>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <ItemNavbar content="Ordens de Serviço" src="/ordem-servico"/>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
