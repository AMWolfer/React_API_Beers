import logo2 from '../reactlogo.svg';
import { render } from "@testing-library/react";
import React from 'react';

class Alicia1 extends React.Component {

render() {

    return (
        
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo2" />
        
        <br/>
        <p>Click, pour voir la documentation sur le router </p>
        <button variant="contained" color="primary"> 
             <a
                className="App-link"
                href="https://www.npmjs.com/package/react-router"
                rel="noopener noreferrer"
             >
                Click
            </a> 
        </button>
        <br/>
        <p>Ici aussi, tout va bien</p>
        
        

    </header>
    </div>

    )
}
 
}
  export default Alicia1;



  

 