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
  getLoggedInUserInfo,
  getLoggedInUserCity,
  getFilteredUsersByCity,
} from "../helpers/userPageHelpers";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserPage = (props) => {
  const { users, user_tag, tags, loading } = props;
  let { id } = useParams();

  const LoggedInUserInfo = getLoggedInUserInfo(id, users);

  const LoggedInUserTagIDs = filterTags(Number(id), user_tag);

  const LoggedInUserCity = getLoggedInUserCity(id, users);

  useEffect(() => {
    setState({
      ...state,
      tags: LoggedInUserTagIDs,
      city: [LoggedInUserCity],
    });
  }, [loading]);

  const [state, setState] = useState({
    tags: [],
    // change age range to logged in user's age, 50
    ageRange: [18, 40],
    city: [],
  });

  // const [tagButtonColor, setTagButtonColor] = useState(true)

  // const toggleButtonColor = () => {
  //   const currentStatus = tagButtonColor
  //   setTagButtonColor(!currentStatus)
  //   console.log("success")
  // }

  const updateAgeRange = (event, data) => {
    const selectArr = { ...state };
    selectArr.ageRange = data;
    setState(selectArr);
  };

  // add selected tag id into state
  const handleTagClick = (itemId) => {
    const selectArr = { ...state };
    selectArr.tags.push(itemId);
    setState(selectArr);
  };

  // add selected address into state
  const handleAddressClick = (city) => {
    const selectArr = { ...state };
    selectArr.city.push(city);
    setState(selectArr);
  };

  const handleEmptyTagsClick = (state) => {
    const selectArr = { ...state, tags: [], city: [], ageRange: [18, 40] };
    setState(selectArr);
  };

  const filteredUsers = getFilteredUserProfile(
    getFilteredUsersByInterest(state.tags, user_tag),
    getFilteredUsersByAge(users, state.ageRange),
    getFilteredUsersByCity(state.city, users),
    users
  );

  return (
    <>
      <NavBar
        handleTagClick={handleTagClick}
        handleAddressClick={handleAddressClick}
        handleEmptyTagsClick={handleEmptyTagsClick}
        updateAgeRange={updateAgeRange}
        ageRange={state.ageRange}
        users={users}
      />

      <div className="user-page">
        {state.tags.length === 0 && state.city.length === 0 ? (
          <h1>No results</h1>
        ) : (
          filteredUsers.map((filteredUser) => {
            return (
              <Grid container spacing={4} className="user-page-ind">
                <Grid item xs={12}>
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
          })
        )}
        {console.log("state", state)}
      </div>
    </>
  );
};

export default UserPage;
