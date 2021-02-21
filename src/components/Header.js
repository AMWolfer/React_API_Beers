import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';  
import {useHistory} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  let history = useHistory();


  const classes = useStyles();
  const handleRoute = (route) => {
      history.push(route)
  }
  return (
    <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          My first application in React.js
          </Typography>
          <Button color="inherit" onClick={() => handleRoute('/')}>Home</Button>
          <Button color="inherit" onClick={() => handleRoute('/Alicia')}>Page 1</Button>
          <Button color="inherit" onClick={() => handleRoute('/Alicia1')}>page 2</Button>
          <Button color="inherit" onClick={() => handleRoute('/Contact')}>Contact</Button>
          <Button color="inherit" onClick={() => handleRoute('/ListBeer')}>TableBeer</Button>
          <Button color="inherit" onClick={() => handleRoute('/ListBeerClass')}>ListBeer</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
