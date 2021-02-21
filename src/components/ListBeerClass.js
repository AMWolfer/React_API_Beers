import React from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';

import logo from '../logo.svg';


export default class ListBeerClass extends React.Component {
    state = {
        fichierjson: [],
        showList: false
    }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers`)
      .then(res => {
        const fichierjson = res.data;
        this.setState({ fichierjson });
      })
  }    

  render() {

    const listBeer = this.state.fichierjson.map((beer, index) => {
        return (
        <li key={index}>Name: {beer.name}, Description: {beer.description}</li>)
    })
    
    const handleClick = () => {
        console.log("Handle click")
        this.setState({showList : true })
        console.log(this.state)
    }

    const showListBeer = () => {
        console.log("showList Beer", this.state.showList)
        if (this.state.showList) return (
        <div> 
            <ul>
               {listBeer} 
            </ul> 
        </div>
        )
    }

    return (        //  mostrar la lista que se forma en la funcion showListeer
    <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <p>Click Beer, pour voir une liste de Beers</p>
          <br/>
      <Button variant="contained" color="primary" onClick={handleClick}>
         Beer
      </Button>
        <div>
          <br/>
         {showListBeer()}
        </div>
      </header>  
    </div>
  )}
  
}