import React from 'react'

import ItemNavbar from './ItemNavbar'

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <ItemNavbar content="Tipos de Serviço" src="/tipo-servico"/>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
