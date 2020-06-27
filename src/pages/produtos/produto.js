import laco2 from "./laco2.jpg"
import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Label,FormGroup,Input, Button
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Laço espanhol com pérolas de marrakech</CardTitle>
          <CardSubtitle>tags? {/*coloca ou nao?*/}</CardSubtitle>
        </CardBody>
        <img width="50%" src={laco2} alt="Card image cap" style={{display: "block",
                                                                  marginLeft: "auto",
                                                                  marginRight: "auto",
                                                                  width: "50%",
                                                                  backgroundColor:"gray"}} />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          {/*preciso que ative uma alerta no botstrap com todos os itens no carrinho, dentro desse alerta um botao para pagamento*/}
         <div>   <FormGroup>
        <Label for="exampleSelect">Quantidade:</Label>
        <input type="number"  min="0">
         
        </input>
      </FormGroup> <CardLink href="#" style={{color: "green"}}>Adicionar ao carrinho</CardLink> <br/> Calcule seu frete <label>CEP:</label><Input type="search" name="email" id="search" placeholder="CEP" /><Button className="btn btn-success">Verificar</Button></div>
          
        </CardBody>
        <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Código do produto: 333568</small>
      </Card>
    </div>
  );
};

export default Example;
