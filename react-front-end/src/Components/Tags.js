import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import useUserPage from "../hooks/useUserPage";
import axios from 'axios';



export default function Tags(props) {
  const { state } = useUserPage();

  // const getUserInterests = (id) => {
  //   const interestsArr = [];
  //   for (const item of users) {
  //     if (item.user_id === id) {
  //       interestsArr.push(item.tag_id);
  //     }
  //   }
  //   return interestsArr;
  //   // returns [1, 2, 3, 4]
  // };

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/interests")
  //   .then(res => {
  //     console.log("tag", res.data.interests)
  //     setTags(res.data.interests)
  //   })
  // }, []);


  // if user.id = 1, push all interests.name into array. map that array
  return (
    <div>

      {state.interests.map((interest) => {
        return (
          <Button size="small" variant="outlined" color="primary" >
          {interest.tags}
          </Button>
        )
      })}

      
    
    </div>

  );
}
