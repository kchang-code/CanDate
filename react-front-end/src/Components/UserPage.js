import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";
import './UserPage.scss';

const UserPage = () => {
  const { state } = useUserPage();

  return (
    <>
      <div >
        {state.users.slice(6,12).map((user) => {
          return (
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <ProfileCard
                  key={user.id}
                  name={user.first_name}
                  age={user.age}
                  profile_photo={user.profile_photo}
                />
              </Grid>
            </Grid>
          );
        })}
      </div>
      
       {console.log("state.users", state.users)}
       {console.log("state", state)}
      {/* <p>hello</p> */}
    </>
  );
};

export default UserPage;
