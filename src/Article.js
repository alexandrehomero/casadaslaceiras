import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
const Article = (props) => {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">E ai galerinha ola mundo</h1>
          <p className="lead">Estamos aqui mais um dia fazendo besteirada porra</p>
          <hr className="my-2" />
          <p>Bora comer sopa de macaco caraio</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    );
  };
export default Article;