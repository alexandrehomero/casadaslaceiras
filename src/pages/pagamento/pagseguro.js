import React from 'react';
import Modelo from './produtoModelo'
import Formulario from './endereco'

import foto3 from '../produtos/laco3.jpg'
import foto2 from '../produtos/laco2.jpg'
import foto1 from '../produtos/laco1.jpg';
import { Button } from 'reactstrap';
const Example = (props) => {
  return (
    <div className="modelo">
    {/* na manipulacao do banco de dados, quando aperar o botao x do alerta em produto modelo, retirar o elemento o qual foi apertado o botao */}
    <br/>
    <Modelo codigo="45789" titulo="lacos diversos de cores multiplas" image={foto1} preco={500.10}/>
    <Modelo codigo="87897"  titulo="Tiara branca espanhola com lacos brancos" image={foto2} preco={100.94}/>
    <Modelo codigo="24524"  titulo="laco branco de seda" image={foto3} preco={24.22}/>
    <Modelo codigo="09600" titulo="Tiara branca espanhola com lacos brancos" image={foto1} preco={45.56}/>
    <Modelo codigo="98676" titulo="Tiara branca espanhola com lacos brancos" image={foto2} preco={92.26}/>
    <Modelo codigo="98675" titulo="Tiara branca espanhola com lacos brancos" image={foto3} preco={65.22}/>
    <Modelo codigo="68997" titulo="Tiara branca espanhola com lacos brancos" image={foto1} preco={66.10}/>
    <Modelo codigo="64677" titulo="Tiara branca espanhola com lacos brancos" image={foto2} preco={54.99}/>
    <Formulario  codigo="45789" titulo="lacos diversos de cores multiplas" image={foto1} preco={500.10}/>
   
    </div>
  );
};

export default Example;