import React from 'react';
import '../../routes'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import laco2 from "./laco2.jpg"
import laco1 from "./laco1.jpg"
import laco3 from "./laco3.jpg"
const Pagcard = (props) => {
  return (<div className="cars12">
  {/* Slide de cards na primeira pag */}
   <h1>Laços:</h1>
    <CardGroup id="cardpag">
    
    <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting texerwrwerwerwerwerwerwerewrwerwerwerwerwererwrwrwrwerwerrwewrwerwerwerwerwerwerwewerwert below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card> <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}><a href="/produto1">Ver produto</a></Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco2}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink", }}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco3}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card><Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
     
      <hr/>
    </CardGroup><CardGroup id="cardpag">
    
    <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card> <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle >Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco2}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink", }}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco3}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card><Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
     
      <hr/>
    </CardGroup><CardGroup id="cardpag">
    
    <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card> <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco2}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink", }}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco3}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card><Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
     
      <hr/>
    </CardGroup><CardGroup id="cardpag">
    
    <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card> <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco2}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink", }}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco3}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card><Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
     
      <hr/>
    </CardGroup><CardGroup id="cardpag">
    
    <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card> <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco2}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink", }}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco3}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card><Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
     
      <hr/>
    </CardGroup><CardGroup id="cardpag">
    
    <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card> <Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco2}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink", }}>Ver produto</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={laco3}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card><Card>
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
     
      <hr/>
    </CardGroup>
    
   
    
    </div>
    
    
  );
};

export default Pagcard;