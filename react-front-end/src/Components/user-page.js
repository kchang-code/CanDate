import React, { useEffect, useState} from "react";
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
    
     <Grid container spacing={3}>
       <Grid item xs={12} md={4}>
         <ProfileCard>1</ProfileCard>
       </Grid>
       <Grid item xs={12} md={4}>
         <ProfileCard>2</ProfileCard>
       </Grid>

       <Grid item xs={12} md={4}>
         <ProfileCard>3</ProfileCard>
       </Grid>

     </Grid>
    
  );
}

export default UserPage;
