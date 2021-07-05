import React, {useState} from 'react';
import './NavBar.scss'
import AppBar from '@material-ui/core/AppBar';
import { Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default function NavBar () {

  const [filterPopUp, setFilterPopUp] = useState(false);

    const handleClick = () => {
      setFilterPopUp(true);
    };

  return (
  <AppBar position="static">
  <Toolbar>
    <Button onClick={handleClick} color="inherit" class="filter-btn">Filter</Button>
  </Toolbar>
</AppBar>
  )

}