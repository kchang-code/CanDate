import React, { useState, useContext, useEffect } from 'react';
import './NavBar.scss';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FilterPopUp from './FilterPopUp';
import { TagsContext } from '../Context/TagsContext';
import axios from 'axios';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
  const [anchorEl, setAnchorEl] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const { ageRange, updateAgeRange, users, handleAddressClick, buttonColor } = props;

  const [tag, setTags] = useState([]);
  const [selectTag, setSelectTag] = useState({
    tags: [],
    buttonColor: false,
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/tags').then((res) => {
      setTags(res.data.tags);
    });
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={togglePopup} color="inherit" class="filter-btn">
            Filter
          </Button>
          <Button
            onClick={() => props.handleEmptyTagsClick(selectTag)}
            color="inherit"
            class="filter-btn"
          >
            Clear Filter
          </Button>
          <Typography className={classes.title} variant="h6" noWrap>
            CanDate
          </Typography>
          <div className={classes.grow} />
          <Toolbar>
            {isOpen && (
              <FilterPopUp style={{ position: "relative", zIndex: "100" }}
                handleTagClick={props.handleTagClick}
                handleAddressClick={handleAddressClick}
                handleTagClick={props.handleTagClick}
                content={tag}
                savebtn={<button>Save</button>}
                save={togglePopup}
                handleClose={togglePopup}
                ageRange={ageRange}
                updateAgeRange={updateAgeRange}
                users={users}
                buttonColor={buttonColor}
              />
            )}
          </Toolbar>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon
                  onClick={() =>
                    window.location.replace(
                      `http://localhost:3002/users/${props.name[0].id}/message`
                    )
                  }
                />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: "50px" }}
              >
                <Button variant="contained" color="secondary" href="http://localhost:3002" onClick={handleClose}>
                  logout
                </Button>
              </Menu>
            </IconButton>
            <p>
              Welcome{' '}
              <strong>{props.name[0] && props.name[0]['first_name']}</strong>
            </p>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
}
