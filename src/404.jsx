import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './23170-404-error-empty-folder-animation.json'
 
const App = () => (<div id="error404">

<h2>Página não encontrada </h2>
  <Lottie id="error404"
    options={{
      animationData: animation,
      width: "50px",
    }}
    
  /></div>
)
 
export default App