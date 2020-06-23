import React, {useState} from 'react';
import { Alert, Media } from 'reactstrap';
import foto1 from '../produtos/laco1.jpg';

const Modelo = (props) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
  return (
    <div className="carrinho">
      <Alert color="primary" isOpen={visible} toggle={onDismiss}>
      
 
    <Media >
      <Media left href="#">
        <Media object id="modeloimg"src={props.image} alt="Generic placeholder image" />
      </Media>
      <Media body >
        <Media heading id="mediatext">
        {props.titulo}
        </Media>
       
      </Media>
      <h4 id="preco">R$ {props.preco.toFixed(2).replace('.', ',')}</h4>
    </Media>
        <small>Código: {props.codigo}</small>
      </Alert>
      
    </div>
  );
};

export default Modelo;