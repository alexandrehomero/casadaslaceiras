import React from 'react';
import Routes from './routes'
import Headers from './components/Headers'
import Footer from './components/Footer'
  function App (props) {
    return (
      <div>
        <Headers/>
        <Routes/>
        <Footer/>
      </div>
      
    );
  };
export default App;
