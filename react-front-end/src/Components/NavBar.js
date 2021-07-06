import React, { useState, useContext, useEffect } from "react";
import "./NavBar.scss";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';

import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import FilterPopUp from "./FilterPopUp";
import { TagsContext } from "../Context/TagsContext";
import axios from 'axios';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';

import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  console.log('what is this', props.info)

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
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            CanDate
          </Typography>
          <div className={classes.grow} />
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
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Welcome Zio</p>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

}
