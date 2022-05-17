import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import TipoServico from '../pages/TipoServico';

const routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/tipo-servico' component={TipoServico}></Route>
        </Switch>
    </BrowserRouter>
)

export default routes;
