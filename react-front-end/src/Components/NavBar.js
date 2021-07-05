import React, { useState, useContext, useEffect } from "react";
import "./NavBar.scss";
import AppBar from "@material-ui/core/AppBar";
import { Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import FilterPopUp from "./FilterPopUp";
import { TagsContext } from "../Context/TagsContext";
import axios from 'axios';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTags] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const save = () => {
    console.log("save");
  };
  const tagArr = (tag) =>{
    let tagArr = [];
    for (const item of tag) {
      tagArr.push(item.name)
    }
    return tagArr;
  }
  

  useEffect(() => {
    axios.get("http://localhost:8080/api/tags").then((res) => {
      setTags(res.data.tags);
    });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={togglePopup} color="inherit" class="filter-btn">
            Filter
          </Button>
          {isOpen && (

              <FilterPopUp
                content={tagArr(tag)}
                savebtn={<button>Save</button>}
                save={save}
                handleClose={togglePopup}
              />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
