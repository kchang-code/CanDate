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
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTags] = useState([]);
  const [selectTag, setSelectTag] = useState({
    tags: [],
    buttonColor: false,
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };




  const tagArr = (tag) => {
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
    <AppBar position="static" className="nav" >
      <div>
        <Toolbar>
          <Button onClick={togglePopup} color="inherit" class="filter-btn">
            Filter
          </Button>
          <Button onClick={() => props.handleEmptyTagsClick(selectTag)} color="inherit" class="filter-btn">
            Clear Filter
          </Button>

          {isOpen && (

            <FilterPopUp
              handleTagClick={props.handleTagClick}
              content={tag}
              savebtn={<button>Save</button>}
              save={togglePopup}
              handleClose={togglePopup}
            />
          )}
        </Toolbar>
      </div>
      <div className="nav-info">
        <div><a href="/users/1/message"><EmailIcon /></a></div>
        <div><AccountCircleIcon /></div>
        <div><p>Welcome {"Zio"}</p></div>
        <div><Button color="secondary">Logout</Button></div>
      </div>
    </AppBar>
  );
}
