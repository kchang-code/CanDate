import React, { useEffect, useState, useContext } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";
import "./UserPage.scss";
import axios from "axios";
import NavBar from "./NavBar";
import { TagsContext } from "../Context/TagsContext";
import { useRadioGroup } from "@material-ui/core";
import {filterTags, getNameOfTag, getFilteredUsers,} from '../helpers/userPageHelpers';

const UserPage = (props) => {
  const { state } = useUserPage();
  const [user_tag, setUserTag] = useState([]);
  const [tag, setTags] = useState([]);
  const [selectTag, setSelectTag] = useState([]);

  // add selected tag id into arr
  const handleTagClick = (itemId) => {
    const selectArr = [...selectTag];
    selectArr.push(itemId)
    setSelectTag(selectArr)
};

  useEffect(() => {
    axios.get("http://localhost:8080/api/user_tag").then((res) => {
      setUserTag(res.data.user_tag);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/api/tags").then((res) => {
      setTags(res.data.tags);
    });
  }, []);

  
  
  // return array of objects for filtered users
  const getFilteredUserProfile = (filteredUserId, users) => {
    const userProfiles = [];
    for (const user of users) {
      for (const userId of filteredUserId) {
        if (user.id === userId) {
          userProfiles.push(user)
        }
      }
    }
    return userProfiles
  }
  
  return (
    <>
      <TagsContext.Provider values={tag}>
        <NavBar handleTagClick={handleTagClick}/>
      </TagsContext.Provider>
      <div>
        {selectTag.length === 0 ? state.users.map((user) => {
          return (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
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
        }) 
        : getFilteredUserProfile(getFilteredUsers(selectTag, user_tag), state.users).map((filteredUser) => {
          return (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <ProfileCard
                  key={filteredUser.id}
                  name={filteredUser.first_name}
                  age={filteredUser.age}
                  profile_photo={filteredUser.profile_photo}
                  tag={getNameOfTag(filterTags(filteredUser.id, user_tag), tag)}
                />
              </Grid>
            </Grid>
          );
        })
      }
      </div>
      {console.log("state.users", state.users)}
      {console.log("selectTag", selectTag)}

    </>
  );
};

export default UserPage;
