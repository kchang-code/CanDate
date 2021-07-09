import React, { useState, useContext, useEffect } from 'react';
import './NavBar.scss';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FilterPopUp from './FilterPopUp';
import axios from 'axios';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

//from line 24 - 63 are all material ui functions
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

//from line 24 - 90 are all material ui functions

export default function NavBar(props) {
  const classes = useStyles();



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClosed = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { ageRange, updateAgeRange, users, handleAddressClick, buttonColor } =
    props;
  const [tag, setTags] = useState([]);


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
    <div>
      <AppBar position="static" color="white">
        <Toolbar>
          <img src='https://github.com/MattLuo90/CanDate/blob/master/react-front-end/src/docs/logo.jpg?raw=true' width="80" style={{ marginLeft: "30px" }} />
          <div className="nav-bar-logo"><p>CanDate</p></div>
          <div className={classes.grow} />
          <div className="nav-bar-tab">
            <Tab label="Favorite" onClick={props.handleFavorite} />
            <div>
              <Tab label="Filter" onClick={handleClickOpen} />
              <Dialog
                onClose={handleClosed}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle id="customized-dialog-title" onClose={handleClosed}>
                  Filter Results:
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    <FilterPopUp
                      handleTagClick={props.handleTagClick}
                      handleAddressClick={handleAddressClick}
                      content={tag}
                      save={handleClosed}
                      savebtn={<Button>Save</Button>}
                      ageRange={ageRange}
                      updateAgeRange={updateAgeRange}
                      users={users}
                      buttonColor={buttonColor}
                      setGender={props.setGender}
                      state={props.state}
                    />
                  </Typography>
                </DialogContent>
              </Dialog>
            </div>
            <Tab label="Clear Filter" onClick={() => props.handleEmptyTagsClick()} />
          </div>
          <div className="buttonList">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary" variant="dot">
                <MailIcon onClick={(e) => props.handleMessageOpen(e)} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: '50px' }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  href="http://localhost:3002"
                  onClick={handleClose}
                >
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
    </div>
  );
}
