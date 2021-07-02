import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Typography, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

export default function ProfileCard() {
  return (
    <>
    <div>
      <Card elevation={3} onClick={() => {console.log('flip')}}>
        <CardHeader title={"Mary Smith, 26, Vancouver"}
        action={
          <IconButton onClick={() => {console.log("favorite")}}>
            <FavoriteIcon />
          </IconButton>
        }
        />
        <CardMedia
          style={{ height: "300px", paddingTop: "2%" }}
          image="https://www.female-founders.org/wp-content/uploads/marston-website-.png"
          title="Paella dish"
        /> 
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Tags: 
          </Typography>
          <Button size="small" variant='outlined' color='primary'>
          Hiking
          </Button>
          <Button size="small" variant='outlined' color='primary'>
          Swimming
          </Button>
          <Button size="small" variant='outlined' color='primary'>
          Singing
          </Button>
          <Button size="small" variant='outlined' color='primary'>
          Yoga
          </Button>
          <Button size="small" variant='outlined' color='primary'>
          Baking
          </Button>
        </CardContent>
      </Card>
    </div>
    </>
  )
}