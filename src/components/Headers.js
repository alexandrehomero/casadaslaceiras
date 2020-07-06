import React, { useState } from 'react';
import { SearchOutlined} from '@ant-design/icons';
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
  NavbarText,
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
        <Navbar color="pink" light expand="md">
        <NavbarBrand href="/"><img id="logoinicial" src={logo}/></NavbarBrand>
        <Form><Input type="search" placeholder="pesquisar"> </Input><SearchOutlined id="logosearch" type="submit"/></Form>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
        
      </Navbar>
     
      
    </div></div>
  );
}

export default Headers;