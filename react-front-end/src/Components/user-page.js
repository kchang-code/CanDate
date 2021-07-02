import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProfileCard from "./profile-card";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const UserPage = (props) => {

  const [state, setState] = useState('')

  useEffect(() => {
    axios.get('/users').then((res) => {
      setState(res.first_name)
    })
  }, [])

  return (

    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <ProfileCard></ProfileCard>

      </Grid>
    </Grid>

  );
}

export default UserPage;
