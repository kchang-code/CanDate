import Message from './Message';
import React, { useEffect, useState } from 'react';
import './ProfileCard.scss';
import useUserPage from '../hooks/useUserPage';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

//from line 25 - 63 are all material ui functions
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
//from line 25 - 63 are all material ui functions

//new dialog import for message component

export default function ProfileCard(props) {
  let { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const { tags, users, favorite } = props;
  //zio added open state

  const handleLike = () => {
    const newFavorite = {
      user_id: Number(id),
      favorite_user_id: Number(props.id),
    };

    axios
      .put('http://localhost:8080/api/favorites', {
        newFavorite: { ...newFavorite },
      })
      .then(() => {
        props.setFavorite([...favorite, newFavorite]);
        console.log('newFavorite', newFavorite);
      });
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const title = props.name + ',' + props.age + ',' + props.address;

  const handleClickMessage = () => {
    setOpen(true);
    const newMessage = {
      from_user_id: Number(id),
      to_user_id: Number(props.id),
      content: `Hello! I am ${props.name}`,
    };
    console.log('load to message page');

    const timeElapsed = Date.now();
    //sending msg state
    let today = new Date(timeElapsed);

    let time = today.toLocaleString();
    axios
      .put('http://localhost:8080/api/users/:id/messages', {
        newMessage: { ...newMessage, creates_on: time },
      })
      .then((res) => {
        props.setMessages([...props.messages, ...res.data]);
      })
      .catch((err) => {
        console.log('Put error on new messages', err);
      });
  };

  let color;
  props.filteredFavoriteId.includes(props.id)
    ? (color = 'red')
    : (color = 'rgba(0, 0, 0, 0.54)');

  return (
    <>
      <div className="ProfileCard">
        <Card
          // {users}
          class="card"
          elevation={3}
          onClick={() => {
            console.log('flip');
          }}
        >
          <CardHeader
            class="name"
            title={title}
            action={
              <>
                <IconButton
                  style={{ color: color }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike();
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickMessage();
                  }}
                >
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={handleClose}
                    >
                      Modal title
                    </DialogTitle>
                    <DialogContent dividers style={{ maxWidth: '100000px' }}>
                      <Message
                        messages={props.messages}
                        users={props.users}
                        setMessages={props.setMessages}
                        loading={props.loading}
                        realTimeData={props.realTimeData}
                        favorite={props.favorite}
                        block={props.block}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <ChatBubbleIcon />
                </IconButton>
              </>
            }
          />
          <CardMedia
            style={{ height: '200px', paddingTop: '2%' }}
            image={props.profile_photo}
          />
          <CardContent>
            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                getting know me better
              </Button>
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  About Me
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Name: {props.name} {props['last_name']}
                  </Typography>
                  <Typography gutterBottom>City: {props.city}</Typography>
                  <Typography gutterBottom>Gender: {props.gender}</Typography>
                  <Typography gutterBottom>Age: {props.age}</Typography>
                  <Typography gutterBottom>Height: {props.height}</Typography>
                  <Typography gutterBottom>
                    About Me: {props['about_me']}
                  </Typography>
                </DialogContent>
              </Dialog>
            </div>
            <Typography variant="body2" color="textSecondary">
              Mutual interests:
            </Typography>
            {props.tag.map((item) => {
              return <Chip label={item} color="primary" />;
            })}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
