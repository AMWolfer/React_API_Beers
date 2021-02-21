import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Alicia from './components/alicia.js';
import Alicia1 from './components/alicia1.js';
import Home from './components/Home.js';
import ListBeer from './components/ListBeer.js'
import ListBeerClass from './components/ListBeerClass.js'
import Header from './components/Header.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <div className="App">
        
      <Router>
      <Header/>

     <div>
        <Switch>
          <Route path="/Alicia">
            <Alicia />
          </Route>
          <Route path="/Alicia1">
            <Alicia1 />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/ListBeer">
            <ListBeer />
          </Route>
          <Route path="/ListBeerClass">
            <ListBeerClass />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
