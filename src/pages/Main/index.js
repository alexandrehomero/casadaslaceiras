import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import lottie from 'lottie-web';
import About from './about';
import Cards from './card';
class Main extends Component {
  constructor() {
    super();
    this.state = {
       className: 'hidden'
    }
  }
  handleScroll() { 
   if (document.documentElement.scrollTop > 30) {
      this.setState({
        className: 'show2'
      })
    } 
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }
  
  render() {
   
  return (
    <div>
    {/* Primeira imagem */}
      <Jumbotron id="Jumbotron" style={{backgroundColor: "pink", borderColor: "pink"}}>
        <h1 className="display-3">Confira nossos melhores laços</h1>
        <p className="lead">De um toque de estilo na sua vida</p>
        <hr className="my-2" />
        <p >Confira nossos melhores ofertas</p>
        <p className="lead">
          <Button color="light">Ver mais</Button>
        </p>
      </Jumbotron>
      
      <About className={this.state.className} />
      <Cards/>
         {/* A partir daqui todos os cards n 1 */}
    </div>
 
  );
};}

export default Main;