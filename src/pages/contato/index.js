import React from 'react';
import face from "./face.png";
import zap from "./zap.png";
import insta from "./insta.png";
import Formulario from "./form";
function Contato(){
    return(<div className="contato card-body">

    <div className="divchata" align="center"><ul>
        <li><a href="#"><img src={face}/></a></li>
        <li><a href="#"><img src={zap}/></a></li>
        <li><a href="#"><img src={insta}/></a></li>
    </ul></div>
        <Formulario/>
        <h1>Casa das laceiras</h1>
        <p>Nossa loja fixa se localiza na Avenida castanheiras, lote 920 Bloco C Loja 10/11
nosso endereço, proximo ao BIG BOX (BIG CENTER)</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.430047801205!2d-48.01611803331814!3d-15.83397909146845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60a7fc15525930ea!2sArmarinho%20%C3%94nix!5e0!3m2!1spt-BR!2sbr!4v1588707366295!5m2!1spt-BR!2sbr" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>    );
};
export default Contato;