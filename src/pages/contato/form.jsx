import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

const Formulario = (props) => {
  return (
    <Form id="form" >
      <FormGroup>
        <Label for="exampleEmail">Deixe seu recado</Label>
        
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="joao@macedo.com"
        />
      </FormGroup>
      
      
      <FormGroup>
        <Label for="exampleSearch">Nome</Label>
        <Input
          type="Name"
          name="Name"
          id="exampleSearch"
          placeholder="Joao Macedo"
        />
      </FormGroup>
      
      
      <FormGroup>
        <Label for="exampleText">Mensagem</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile" >inserir imagem</Label>
        <Input type="file" name="file" id=""  />
        <FormText color="muted">
          
        </FormText>
      </FormGroup>
     
      <Button type="submit" style={{backgroundColor: "pink", border:"pink"}}>Enviar</Button>
    </Form>
  );
}

export default Formulario;