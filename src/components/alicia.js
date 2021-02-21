import logo from '../logo.svg';

function Alicia() {

    return (
        
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <br/>
        <p>Click, pour voir la documentation sur les boutons </p>
        <button variant="contained" color="primary"> 
             <a
                className="App-link"
                href="https://material-ui.com/fr/components/buttons/"
                rel="noopener noreferrer"
             >
                Click
            </a> 
        </button>
        <br/>
        <p>Jusqu'à ici, tout va bien</p>
        
        </header>
    </div>
    )
}
  
  export default Alicia;



  

 