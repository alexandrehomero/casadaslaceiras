import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
const Example = (props) => {
  return (
    <Form className="card card-body" style={{backgroundColor: "#e0e0e0"}}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Ex: joao@email.com" />
          
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input type="password" name="password" id="examplePassword" />
          </FormGroup>
        </Col>
      </Row>
      <Col md={11}><FormGroup>
        <Label for="exampleAddress">Telefone de contato</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Ex:(61)999999999"/>
      </FormGroup></Col>
      <Col md={11}><FormGroup>
        <Label for="exampleAddress">CPF</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="Ex:78966548950"/>
      </FormGroup></Col>
      <Col md={11}><FormGroup>
        <Label for="exampleAddress2">
          Endereco
        </Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="ex: Rua das flores n 335"/>
      </FormGroup></Col>
      <Col md={11}><FormGroup>
        <Label for="exampleAddress2">Complemento</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartamento, lote, estudio"/>
      </FormGroup></Col>
      
      <Row form>
        <Col md={5}>
          <FormGroup>
            <Label for="exampleCity">Cidade</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">Estado</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">CEP</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Concordo em receber emails</Label>
      </FormGroup>
      <Button style={{backgroundColor: "pink", float:"left", border:"pink"}}>Cadastrar</Button>
    </Form>
  );
}

export default Example;