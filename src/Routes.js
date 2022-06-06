import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Erro from './Pages/Erro';
import Produto from './Pages/Produtos';



const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
        <Switch>
       <Route exact path="/" component={Home} /> 
       <Route path="/sobre" component={Sobre} />
       <Route  exact path="/contato" component={Contato} />
       <Route path="/produto/:id" component={Produto}/>



       <Route  path="*" component={Erro} />
  

       </Switch>
       </BrowserRouter>



    );
}

export default Routes;