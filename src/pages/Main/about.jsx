import React, { Component } from 'react';
import logo from "./logo.png";
class About extends Component {
  render() {
    return(
      <div className="about-wrapper">
        <div className="about-text">
          <div className={this.props.className}>
          <img src={logo}/>
            <h3 style={{color: "pink"}}>&nbsp;&nbsp;&nbsp;&nbsp;Para você</h3>
            <p className="card-body">&nbsp;&nbsp;&nbsp;&nbsp;Um sonho sendo realizado, conquistas sendo alcançadas, desejos realizados. Nós da Casa das laceiras viemos para dá a vocês o espaço que toda laceira sonha, um bom atendimento, ótimos preços, qualidade e variedade de produtos, material especifico para laceiras e artesãs.
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;Entre em contato com a gente para conhecer nossa loja em Brasilia, e nossos catálogos online, atendimento via WhatsApp, temos Instagram com varias novidades e produtos.
Enviamos para todo o Brasil pelos correios (PAC ou SEDEX). <br/>
&nbsp;&nbsp;&nbsp;&nbsp;Não fiquem de fora, indiquem amigas, vizinhas, primas todo mundo para aproveitar os melhores preços e qualidade de materiais para confecção de laços, tiaras, etc.   </p>
<img src={logo}/></div>
         </div>
     
      </div>
     )
   }
}
export default About;