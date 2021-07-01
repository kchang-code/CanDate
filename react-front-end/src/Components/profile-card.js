import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {Typography, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function ProfileCard() {
  return (
    <>
    <div>
      <Card elevation={3}>
        <CardHeader title={"Name"}
        action={
          <IconButton onClick={() => {console.log("favorite")}}>
            <FavoriteIcon />
          </IconButton>
        }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Description
          </Typography>
        </CardContent>
      </Card>
    </div>
    </>
  )
}