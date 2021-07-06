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

export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const {ageRange, updateAgeRange} = props

const [tag, setTags] = useState([])
  const [selectTag, setSelectTag] = useState({
    tags: [],
    buttonColor: false,
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


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
                ageRange={ageRange}
                updateAgeRange={updateAgeRange}
              />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
