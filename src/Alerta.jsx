import React, { useState }from 'react';
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
  const Alerta = (props) => {
    
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
   
          return(
          
<Alert id="alerta" style={{backgroundColor: "#fdddca", border:"pink"}} isOpen={visible} toggle={onDismiss}>
      <Form inline>
      <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button  style={{backgroundColor: "pink", border:"pink"}}>Enviar</Button>
      <a href="/login">&nbsp;&nbsp;&nbsp;Criar uma conta</a>
    </Form>
    </Alert>);}
    export default Alerta;