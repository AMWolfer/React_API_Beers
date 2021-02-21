import logo from '../logo.svg';
import logo2 from '../reactlogo.svg';

import '../App.css';


function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo2" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        

      </header>
    </div>
  );
}

export default Home;



