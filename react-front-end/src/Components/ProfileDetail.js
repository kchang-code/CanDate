import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import "./ProfileDetail.scss"



export default function ProfileDetail(props) {


  return (
    <div className="detail" >
      <div className="detail-body">
        <Card elevation={3} onClick={() => { console.log('flip') }}>
          <CardHeader title={"Mary Smith, 26, Vancouver"}
            action={
              <IconButton onClick={() => { console.log("favorite") }}>
                <FavoriteIcon />
              </IconButton>
            }
          />
          <CardMedia
            style={{ height: "230px", paddingTop: "2%" }}
            image="https://randomuser.me/api/portraits/women/15.jpg"
            title="Paella dish"
          />
          <CardContent className="detail-info">
            <Box>Age:20</Box>
            <Box>Gender:Female</Box>
            <Box>Height:190cm</Box>
            <Box>About Me: My name is Kristen Hart. I''m here to look for my life partner, and I like Guitar. If you like me, let''s chat.  </Box>
            <Typography variant="body2" color="textSecondary">
              Tags:
            </Typography>
            <Chip label="Hiking" color='secondary' />
            <Chip label="Hiking" color='secondary' />
            <Chip label="Hiking" color='secondary' />
            <Chip label="Hiking" color='secondary' />
          </CardContent>
        </Card>
      </div>
    </div >
  );
}