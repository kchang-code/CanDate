import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";

const UserPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(res => {
        setUsers(res.data.users)
      })
  }, [])

  return (

    <div>
      This is rendering
       {users.map(user=> {
         return (
          <div class={user.id}>
            {user.id}
          </div>);
      })}
    </div>
    // <Grid container spacing={4}>
    //   <Grid item xs={12} md={3}>
    //     <ProfileCard></ProfileCard>

    //   </Grid>
    // </Grid>

  );
}

export default UserPage;
