import React from 'react';
import { Table } from 'reactstrap';
import local from "../imagens/local.png"
const Footer = (props) => {
  return (
   <div><br/>
   <Table className="footer card card-body" style={{backgroundColor: "#fdddca", }}>

    <div className="row"><a href="#"><img id="local"src={local}/></a><a href="/"><h4 href="/" style={{color: "#FFFFFF"}}>Casa da laceira</h4></a> <h6 style={{color: "#FFFFFF"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Site criado pela <a href="https://homero.tech/">homero.tech</a></h6></div>
     
    </Table></div>
  );
}

export default Footer;