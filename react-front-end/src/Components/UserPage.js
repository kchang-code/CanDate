import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";

const UserPage = () => {
  const { users } = useUserPage();

  return (
    <>
      <div>
        {users.map((user) => {
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
          );
        })}
      </div>
      {console.log("users", users)}
      <p>hello</p>
    </>
  );
};

export default UserPage;
