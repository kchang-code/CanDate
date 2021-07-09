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
import BlockIcon from '@material-ui/icons/Block';
import DialogContentText from '@material-ui/core/DialogContentText';
import { PercentageBadge } from './PercentageBadge';
import { motion } from 'framer-motion';
import Badge from 'react-bootstrap/Badge';
import {
  checkIfLiked,
  findIndexOfFavorite,
  getFavoriteByUser,
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

  const filteredFavoriteId = getFavoriteByUser(favorite, id);
  // console.log('filteredFavoriteId', filteredFavoriteId);
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
      console.log('favorite1', favorite);
    } else {
      console.log('here');
      axios
        .put('http://localhost:8080/api/favorites', {
          newFavorite: { ...newFavorite },
        })
        .then(() => {
          props.setFavorite([...favorite, newFavorite]);
          // console.log('favorite', favorite);
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

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="ProfileCard"
        // whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      >
        <Card
          // {users}
          class="card"
          elevation={3}
          // onClick={handleClickOpen}
        >
          <CardHeader
            class="name"
            title={title}
            action={
              <>
                <IconButton
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
                <IconButton onClick={handleClickMessage}>
                  <ChatBubbleIcon />
                </IconButton>
                <Dialog
                  onClose={handleMessageClose}
                  aria-labelledby="customized-dialog-title"
                  open={openMsg}
                  maxWidth="xl"
                >
                  <Message
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
                  onClick={() => {
                    handleClickOpenConfirm();
                  }}
                >
                  <BlockIcon />
                </IconButton>
                <Badge variant="light" class="percentage">
                  {props.users[Number(props.id - 1)].percent}
                </Badge>
                % Match
                {/* from here is the block confirmation */}
                <Dialog
                  open={openConfirm}
                  onClose={handleCloseConfirm}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {'Are you sure you want to block this person?'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You will not get any information or message from this
                      person.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseConfirm} color="primary">
                      Cancel
                    </Button>
                    <Button
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
              </>
            }
          />
          <CardMedia
            style={{ height: '200px', paddingTop: '2%' }}
            image={props.profile_photo}
          />
          <CardContent>
            {/* getting know me better */}
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
      </motion.div>
      {/* {console.log("props.matchpercentage", props.matchPercentage)} */}
    </>
  );
}
