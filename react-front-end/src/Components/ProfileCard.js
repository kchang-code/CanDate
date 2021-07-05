import React, { useEffect, useState } from 'react';
import './ProfileCard.scss';
import useUserPage from "../hooks/useUserPage";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';
import ReactCardFlip from 'react-card-flip';


export default function ProfileCard(props) {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <>
      <div >
        <Card class="card" elevation={3} onClick={() => { console.log('flip') }}>
          <CardHeader class="name" title={props.name}
            action={
              <>
              <IconButton  onClick={() => { console.log("favorite") }}>
                <FavoriteIcon />
              </IconButton>
              <IconButton  onClick={() => { console.log("load to message page") }}>
               <ChatBubbleIcon />
             </IconButton>
              </>
            }

          />
          <CardMedia
            style={{ height: "300px", paddingTop: "2%" }}
            image={props.profile_photo}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Mutual interests:
            </Typography>
            {props.tag.map(item => { 
              return (
              <Button size="small" variant="outlined" color="primary" >
              {item}
            </Button>
              )
            })}
        
          </CardContent>
        </Card>
      </div>
    </>
  )
}