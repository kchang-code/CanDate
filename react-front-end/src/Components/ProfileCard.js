import Message from './Message';
import React, { useState } from 'react';
import './ProfileCard.scss';

import { Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import BlockIcon from '@material-ui/icons/Block';
import DialogContentText from '@material-ui/core/DialogContentText';
import {
  checkIfLiked,
  findIndexOfFavorite,
} from '../helpers/favoriteBlockHelp';

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
//from line 25 - 68 are all material ui functions

export default function ProfileCard(props) {
  const { openMsg, setOpenMsg, handleMessageClose } = props;

  let { id } = useParams();
  const [open, setOpen] = useState(false);
  // const [openMsg, setOpenMsg] = useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const { favorite } = props;

  const handleClickOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleLike = () => {
    const newFavorite = {
      user_id: Number(id),
      favorite_user_id: Number(props.id),
      id: favorite.length + 1,
    };
    const unlikeIndex = findIndexOfFavorite(
      favorite,
      Number(id),
      Number(props.id)
    );

    let newFavoriteAfterDelete = [...favorite];
    newFavoriteAfterDelete.splice(unlikeIndex, 1);

    if (checkIfLiked(favorite, Number(id), Number(props.id))) {
      axios
        .put('http://localhost:8080/api/deleteFavorite', {
          newFavorite: { ...newFavorite },
        })
        .then(() => {
          props.setFavorite([...newFavoriteAfterDelete]);
        });
    } else {
      axios
        .put('http://localhost:8080/api/favorites', {
          newFavorite: { ...newFavorite },
        })
        .then(() => {
          props.setFavorite([...favorite, newFavorite]);
        });
    }
  };

  const title = props.name + ',' + props.age + ',' + props.address;

  const handleClickMessage = () => {
    const myName = props.users[Number(id) - 1].first_name;
    setOpenMsg(true);
    const newMessage = {
      from_user_id: Number(id),
      to_user_id: Number(props.id),
      content: `Hello! I am ${myName}`,
    };

    const timeElapsed = Date.now();

    let today = new Date(timeElapsed);

    let time = today.toLocaleString('en-GB');
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

  const handleBlock = () => {
    const newBlock = {
      user_id: Number(id),
      block_user_id: Number(props.id),
    };

    axios
      .put('http://localhost:8080/api/blocks', {
        newBlock: { ...newBlock },
      })
      .then(() => {
        props.setBlock([...props.block, newBlock]);
      });
  };

  let color;
  props.filteredFavoriteId.includes(props.id)
    ? (color = 'red')
    : (color = 'rgba(0, 0, 0, 0.54)');

  return (
    <>
      <div className="card">
        <div className="card_title">{title}</div>
        <div className="card_match">
          {props.users[Number(props.id - 1)].percent} % Match
        </div>
        <div className="icon">
          {' '}
          <IconButton
            key="1"
            style={{ color: color }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleLike();
            }}
          >
            <FavoriteIcon />
          </IconButton>
          {/* open message dialogue */}
          <IconButton key="2" onClick={handleClickMessage}>
            <ChatBubbleIcon />
          </IconButton>
          <Dialog
            key="3"
            onClose={handleMessageClose}
            aria-labelledby="customized-dialog-title"
            open={openMsg}
            maxWidth="xl"
          >
            <Message
              key="14"
              messages={props.messages}
              users={props.users}
              setMessages={props.setMessages}
              loading={props.loading}
              realTimeData={props.realTimeData}
              favorite={props.favorite}
              block={props.block}
              handleMessageClose={handleMessageClose}
            />
          </Dialog>
          <IconButton
            key="6"
            onClick={() => {
              handleClickOpenConfirm();
            }}
          >
            <BlockIcon />
          </IconButton>
          {/* from here is the block confirmation */}
          <Dialog
            key="7"
            open={openConfirm}
            onClose={handleCloseConfirm}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle key="15" id="alert-dialog-title">
              {'Are you sure you want to block this person?'}
            </DialogTitle>
            <DialogContent key="16">
              <DialogContentText key="17" id="alert-dialog-description">
                You will not get any information or message from this person.
              </DialogContentText>
            </DialogContent>
            <DialogActions key="19">
              <Button key="9" onClick={handleCloseConfirm} color="primary">
                Cancel
              </Button>
              <Button
                key="10"
                onClick={() => {
                  handleCloseConfirm();
                  handleBlock();
                }}
                color="primary"
                autoFocus
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
          {/* end of confirm dialogue */}
        </div>
        <img
          alt={props.name}
          src={props.profile_photo}
          className="profile_photo"
        />

        <div className="card_content">
          {/* getting know me better */}
          <div>
            <Button
              key="11"
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              More about me
            </Button>
            <Dialog
              key="12"
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle
                key="20"
                id="customized-dialog-title"
                onClose={handleClose}
              >
                About Me
              </DialogTitle>
              <DialogContent key="21" dividers>
                <Typography key="13" gutterBottom>
                  Name: {props.name} {props['last_name']}
                </Typography>
                <Typography key="1" gutterBottom>
                  City: {props.city}
                </Typography>
                <Typography key="2" gutterBottom>
                  Gender: {props.gender}
                </Typography>
                <Typography key="3" gutterBottom>
                  Age: {props.age}
                </Typography>
                <Typography key="4" gutterBottom>
                  Height: {props.height}
                </Typography>
                <Typography key="5" gutterBottom>
                  Notes: {props['about_me']}
                </Typography>
              </DialogContent>
            </Dialog>
          </div>
          <Typography key="6" variant="body2" color="textSecondary">
            Mutual interests:
          </Typography>
          {props.tag.map((item) => {
            return (
              <Chip
                key={props.users.id}
                label={item}
                style={{ backgroundColor: '#ffb3cd' }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
