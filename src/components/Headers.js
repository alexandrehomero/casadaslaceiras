import React, { useState } from 'react';
import carrinho from "../imagens/carrinho.png";
import logo from '../imagens/LOGO-CASA.png';
import './headers.css';
import LoginTips from './loginNoHeader';
import {
  Alert,
  Collapse,
  Button,
  Form,
  ButtonDropdown,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Label,
  Input,
  FormGroup
} from 'reactstrap';
import Alerta from '../Alerta'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  const handleClick = (req,res) => {
   render(
        <Alerta id="alerta"/>
      );
   
  }
  return (
 
    <div>

    <div className="search container "><Col md={2}>
    {handleClick}
    <div className="cadastro-header container">
   <LoginTips id="logintips"/>
    </div>
    
      
        </Col></div><div className="menuH " style={{backgroundColor: "pink"}}>
      <Navbar light expand="md" style={{backgroundColor: "pink"}} className="container">
        <NavbarBrand href="/" style={{color: "white"}}><img id="logoinicial" src={logo}></img></NavbarBrand>
        <div className="components-header-desktop">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/contato">Contato</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sobre-empresa">Quem somos nós</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Nossos produtos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/pagina1">produto1</NavLink>
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem>
                  Option 3
                </DropdownItem>
                <DropdownItem>
                  Option 4
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* acione o alerta com os forms de login ao apertar o botao cadastro*/}
          <Button color="light" onClick={handleClick}>Cadastro</Button>{' '}
        </Collapse>
        </div>
      </Navbar>
     
      
    </div></div>
  );
}

export default Headers;