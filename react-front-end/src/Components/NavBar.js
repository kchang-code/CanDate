import React, { useState } from "react";
import "./NavBar.scss";
import AppBar from "@material-ui/core/AppBar";
import { Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import FilterPopUp from "./FilterPopUp";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
    console.log("CLICK")
  }
 
  const save = () => {
    console.log("save")
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={togglePopup} color="inherit" class="filter-btn">
            Filter
          </Button>
          {isOpen && <FilterPopUp 
                savebtn={<button>Save</button>}
                save={save}
                handleClose={togglePopup}
                />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
