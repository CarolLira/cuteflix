import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import styled from 'styled-components';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Erro = styled.div`
  iframe {
    width: 90%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
}

p {
    color: white;
    width: 27em;
    margin: 2% auto;
}

@media (max-width: 800px) {
    p {
    margin: 0 auto;
    }
}
`;

const Pagina404 = () => (<Erro><div><p>Página não encontrada, mas temos um joguinho pra você :D</p><iframe title="errorPage" src="https://editor.p5js.org/carol_lira/embed/SwjGrb3ey"></iframe></div></Erro>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);