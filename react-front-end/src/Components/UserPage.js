import React, { useEffect, useState, useContext } from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@material-ui/core/Grid";
import useUserPage from "../hooks/useUserPage";
import "./UserPage.scss";
import axios from "axios";
import NavBar from "./NavBar";
import { TagsContext } from "../Context/TagsContext";
import { useRadioGroup } from "@material-ui/core";
import {
  filterTags,
  getNameOfTag,
  getFilteredUsersByInterest,
  getFilteredUserProfile,
  getFilteredUsersByAge,
} from "../helpers/userPageHelpers";
import Button from "@material-ui/core/Button";

const UserPage = (props) => {
  const { users, user_tag, tags } = props;

  const [state, setState] = useState({
    tags: [],
    ageRange: [18, 40],
    buttonColor: false,
  });

  const updateAgeRange = (event, data) => {
    const selectArr = { ...state };
    selectArr.ageRange = data;
    setState(selectArr);
    console.log("state.ageRange", state.ageRange);
  };

  // add selected tag id into arr
  const handleTagClick = (itemId, colorFunc) => {
    const selectArr = { ...state };
    // [{tags:[]}]
    selectArr.tags.push(itemId);
    setState(selectArr);

    colorFunc();
  };

  const handleEmptyTagsClick = (state) => {
    const selectArr = { ...state };
    selectArr.tags = [];
    setState(selectArr);
  };

  return (
    <>
      <TagsContext.Provider values={tags}>
        <NavBar
          handleTagClick={handleTagClick}
          handleEmptyTagsClick={handleEmptyTagsClick}
          updateAgeRange={updateAgeRange}
          ageRange={state.ageRange}
        />
      </TagsContext.Provider>

      <div>
        {state.tags.length === 0
          ? users.slice(5).map((user) => {
              return (
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={3}>
                    <ProfileCard
                      key={user.id}
                      name={user.first_name}
                      age={user.age}
                      profile_photo={user.profile_photo}
                      tag={getNameOfTag(filterTags(user.id, user_tag), tags)}
                      tags={tags}
                    />
                  </Grid>
                </Grid>
              );
            })
          : getFilteredUserProfile(
              getFilteredUsersByInterest(state.tags, user_tag),
              getFilteredUsersByAge(users, state.ageRange),
              users
            ).map((filteredUser) => {
              return (
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={3}>
                    <ProfileCard
                      key={filteredUser.id}
                      name={filteredUser.first_name}
                      age={filteredUser.age}
                      profile_photo={filteredUser.profile_photo}
                      tag={getNameOfTag(
                        filterTags(filteredUser.id, user_tag),
                        tags
                      )}
                    />
                  </Grid>
                </Grid>
              );
            })}
      </div>
      {console.log("users", users)}
      {console.log("state.tags", state.tags)}
      {console.log("tags", tags)}
    </>
  );
};

export default UserPage;
