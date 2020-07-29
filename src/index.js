import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (<div><p>Página não encontrada, mas temos um joguinho pra você :D</p><iframe title="errorPage" src="https://editor.p5js.org/carol_lira/embed/SwjGrb3ey"></iframe></div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/Video" component={CadastroVideo} />
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);