import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";

const UserPage = () => {
  const { users } = useUserPage();

  const getUserInterests = (id) => {
    // if user_id the same, push tag_id into array
    const interestsArr = []; 
    for (const item of users) {
      if (item.user_id === id) {
        interestsArr.push(item.tag_id)
      }
    }
    return interestsArr
  }

  return (
    <>
      {/* <div>
        {users.map((user) => {
          return (
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <ProfileCard
                  key={user.id}
                  name={user.first_name}
                  age={user.age}
                  profile_photo={user.profile_photo}
                  tag={getUserInterests(id)}
                />
              </Grid>
            </Grid>
          );
        })}
      </div> */}
      
       {console.log("users", users)}
       {console.log("helper func", getUserInterests(1))}
      {/* <p>hello</p> */}
    </>
  );
};

export default UserPage;
