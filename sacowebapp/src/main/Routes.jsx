import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Clientes from '../pages/Clientes';

import Funcionarios from '../pages/Funcionarios';
import OrdensServico from '../pages/OrdensServico';
import TipoServico from '../pages/TipoServico';

const routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/tipo-servico' component={TipoServico}></Route>
            <Route exact path='/funcionarios' component={Funcionarios}></Route>
            <Route exact path='/clientes' component={Clientes}></Route>
            <Route exact path='/ordem-servico' component={OrdensServico}></Route>
        </Switch>
    </BrowserRouter>
)

export default routes;
