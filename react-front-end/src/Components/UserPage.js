import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";

const UserPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(res => {
        setUsers(res.data.users.slice(5))
      })
  }, [])

  return (

    <div>
       {users.map(user=> {
         return (
          <Grid container spacing={4}>
          <Grid item xs={6} sm={3}>
            <ProfileCard 
              key={user.id}
              name={user.first_name}
              age={user.age}
              profile_photo={user.profile_photo}
            />
          </Grid>
        </Grid>
         )
       }
       )}
  </div>
  )}

export default UserPage;
