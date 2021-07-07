import React, { useEffect, useState } from "react";
import "./ProfileCard.scss";
import useUserPage from "../hooks/useUserPage";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Button from "@material-ui/core/Button";
import ReactCardFlip from "react-card-flip";
import Chip from "@material-ui/core/Chip";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';


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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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


export default function ProfileCard(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const { tags, users } = props

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const title = props.name + ',' + props.age + ',' + props.address
  return (
    <>
      <div className="ProfileCard">
        <Card
          // {users}
          class="card"
          elevation={3}
          onClick={() => {
            console.log("flip");
          }}
        >
          <CardHeader
            class="name"
            title={title}
            action={
              <>
                <IconButton
                  onClick={() => {
                    console.log("favorite");
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    console.log("load to message page");
                  }}
                >
                  <ChatBubbleIcon />
                </IconButton>
              </>
            }
          />
          <CardMedia
            style={{ height: "200px", paddingTop: "2%" }}
            image={props.profile_photo}
          />
          <CardContent>
            <div>
              <Button variant="outlined" color="primary" onClick={handleClickOpen} >
                getting know me better
              </Button>
              <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  About Me
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Name: {props.name}  {props['last_name']}
                  </Typography>
                  <Typography gutterBottom>
                    City: {props.city}
                  </Typography>
                  <Typography gutterBottom>
                    Gender: {props.gender}
                  </Typography>
                  <Typography gutterBottom>
                    Age: {props.age}
                  </Typography>
                  <Typography gutterBottom>
                    Height: {props.height}
                  </Typography>
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
              return (
                <Chip label={item} color="primary" />
              );
            })}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
