import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import pagamento from './pages/pagamento/pagseguro';
import Main from './pages/Main';
import Contato from './pages/contato';
import SobreEmpresa from './pages/SobreEmpresa';
import login from './pages/login/login';
import Pagcard from './pages/produtos/pagcard';
import produto from './pages/produtos/produto';
import erro from './404'
function Routes(){
    return(
 <BrowserRouter>
     <Switch>
         <Route path="/" exact component={Main}/>
         <Route path="/sobre-empresa" component={SobreEmpresa}/>
         <Route path="/contato" component={Contato}/>
         <Route path="/login" component={login}/>
         <Route path="/pagina1" component={Pagcard} title="xuxa"/>
         <Route path="/produto1" component={produto}/>
         <Route path="/carrinho" component={pagamento}/>
         <Route path="/404" component={erro}/>
         <Redirect from='*' to='/404'/>
     </Switch>
 </BrowserRouter>);
};
export default Routes;