import React, {Component, useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
 
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import laco2 from "./laco2.jpg"
import laco1 from "./laco1.jpg"
import laco3 from "./laco3.jpg"

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const chevronWidth = 0;
    
      return(
        // carrosel
        <div className="cards">
        <h1 style={{color:"#022235"}}>Confira nossas melhores ofertas:</h1>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={2}
        leftChevron={<button style={{backgroundColor:"#ffff", borderRadius:"2px", border:"none", fontSize:"40pt"}}>{'<'}</button>}
        rightChevron={<button style={{backgroundColor:"#ffff", borderRadius:"2px", border:"none", fontSize:"40pt"}}>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div  className="cardstile"><CardGroup >
    
      <Card id="cardsiz">
        <CardImg top width="50%" src={laco2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a widghfdghfeghehgfaghfagghsghfsdgfsadjhfsgjfdsgffdsasfgfsdgjdsagfsdgjfsdgjfsagjdfsgjfdsghhjfsdhjfsdahkfdshahfjsdhjfsdahahfsdjhfsdalfhdasjlkhfdsjaklfhsjdalkfhdajslkhfdasjklfhasdlkjfhjkasler card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card></CardGroup></div>
        <div className="cardstile"><CardGroup >
    
    
      <Card id="cardsiz">
        <CardImg top width="100%" src={laco1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a widghfdghfeghehgfaghfagghsghfsdgfsadjhfsgjfdsgffdsasfgfsdgjdsagfsdgjfsdgjfsagjdfsgjfdsghhjfsdhjfsdahkfdshahfjsdhjfsdahahfsdjhfsdalfhdasjlkhfdsjaklfhsjdalkfhdajslkhfdasjklfhasdlkjfhjkasler card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card></CardGroup></div>
        <div style={{ height: 200 }} className="cardstile"><CardGroup >
    
    <Card id="cardsiz">
        <CardImg top width="100%" src={laco3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a widghfdghfeghehgfaghfagghsghfsdgfsadjhfsgjfdsgffdsasfgfsdgjdsagfsdgjfsdgjfsagjdfsgjfdsghhjfsdhjfsdahkfdshahfjsdhjfsdahahfsdjhfsdalfhdasjlkhfdsjaklfhsjdalkfhdajslkhfdasjklfhasdlkjfhjkasler card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      </CardGroup></div>
        <div style={{ height: 200, background: '#EEE' }}><CardGroup >
    
    <Card id="cardsiz">
        <CardImg top width="100%" src={laco2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText id="textocard">This is a widghfdghfeghehgfaghfagghsghfsdgfsadjhfsgjfdsgffdsasfgfsdgjdsagfsdgjfsdgjfsagjdfsgjfdsghhjfsdhjfsdahkfdshahfjsdhjfsdahahfsdjhfsdalfhdasjlkhfdsjaklfhsjdalkfhdajslkhfdasjklfhasdlkjfhjkasler card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button style={{backgroundColor: "pink", borderColor: "pink"}}>Ver produto</Button>
        </CardBody>
      </Card>
      </CardGroup></div>
      </ItemsCarousel>
    </div>
       </div>
       )
     }
 