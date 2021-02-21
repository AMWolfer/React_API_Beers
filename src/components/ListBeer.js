
import React, {useEffect, useState} from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';

import logo2 from '../reactlogo.svg';

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const mystyle = {
  color: "black",
  backgroundColor: "#4dabf5",
  padding: "10px",
  fontFamily: "Arial",
  border: "1px solid black"
}; 

const mystylehead = {
  color: "red",
  backgroundColor: "#2196f3",
  padding: "12px",
  fontFamily: "Arial HebrewArialMT",
  fontSize: 18,
  fontStyle: "Bold",
  border: "1px solid black"
}; 


function ListBeer () {

  const classes = useStyles();

  const [listBeerFetched, setBeersFetched] = useState([]);

  useEffect(() => {

    axios.get(`https://api.punkapi.com/v2/beers`)
    .then(res => {
      setBeersFetched(res.data)
    })
  }, [])

  const listBeer = listBeerFetched.map((beer, index) => (
    <TableRow key={index}>
      <TableCell style={mystyle} align="left" >
        {beer.name}
      </TableCell>
      <TableCell style={mystyle} align="left">{beer.description}</TableCell>
      <TableCell style={mystyle} align="right">
        <Avatar style={mystyle} alt="Remy Sharp" src={beer.image_url} />
      </TableCell>
    </TableRow>
  ))
  
  const handleClick = () => {
      console.log("Handle click")
      this.setState({showList : true })
      console.log(this.state)
  }

  const showListBeer = () => {
    //console.log("showList Beer", this.state.showList)
    return (
    <TableContainer component={Paper} > 
    <Table className={classes.table} aria-label="simple table" >
      <TableHead>
        <TableRow>
          <TableCell style={mystylehead} align="left">Beer Name</TableCell>
          <TableCell style={mystylehead} align="center">Description</TableCell>
          <TableCell style={mystylehead} align="right">Image</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listBeer}
      </TableBody>
    </Table>
  </TableContainer>
      )
  }


  return (
    <div>
      <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo2" />
          <br/>
        {showListBeer()}

      </header>  
    </div>
  )
}


export default ListBeer