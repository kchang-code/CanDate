import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";
import './UserPage.scss';
import axios from 'axios'
import NavBar from './NavBar';

const UserPage = (props) => {
  const { state } = useUserPage();
  const [user_tag, setUserTag] = useState([])
  const [tag, setTags] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/user_tag')
    .then(res => {
      setUserTag(res.data.user_tag)
    })
  }, []) 

  useEffect(() => {
    axios.get('http://localhost:8080/api/tags')
    .then(res => {
      setTags(res.data.tags)
    })
  }, [])

  const filterTags = (id, userTag) => {
    const tagArr = []
    for (const tag of userTag) {
      if (tag.id === id) {
        tagArr.push(tag.interest)
      }
    }
    return tagArr
    }

    const getNameOfTag = (tagArr, tags) => {
      const tagNameArr = [];
      for (const tag of tagArr) {
        for (const obj of tags) {
          if (tag === obj.id) {
            tagNameArr.push(obj.name)
          }
        }
      }
      //[movie. sport]
      let userTag = {
        tags: tagNameArr
        //id:1
        //tags : [sport, movie]
      }
      return userTag.tags
    }
    
    

  return (
    <>
      <NavBar />
      <div>
        {state.users.map((user) => {
          return (
            <Grid  container spacing={4}>
              <Grid  item xs={12} sm={6} md={3}>
                <ProfileCard 
                  key={user.id}
                  name={user.first_name}
                  age={user.age}
                  profile_photo={user.profile_photo}
                  tag={getNameOfTag(filterTags(user.id, user_tag), tag)}
                />
              </Grid>
            </Grid>

          );
        })}
      </div>
    </>
  );
};

export default UserPage;
