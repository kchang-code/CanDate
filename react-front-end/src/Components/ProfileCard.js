import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';

export default function ProfileCard(props) {

  
  return (
    <>
      <div>
        <Card elevation={3} onClick={() => { console.log('flip') }}>
          <CardHeader title={props.name}
            action={
              <>
              <IconButton onClick={() => { console.log("favorite") }}>
                <FavoriteIcon />
              </IconButton>
              <IconButton onClick={() => { console.log("load to message page") }}>
               <ChatBubbleIcon />
             </IconButton>
              </>
            }

          />
          <CardMedia
            style={{ height: "300px", paddingTop: "2%" }}
            image={props.profile_photo}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Tags:
            </Typography>
            <Button size="small" variant='outlined' color='primary'>
              
            </Button>
            
          </CardContent>
        </Card>
      </div>
    </>
  )
}