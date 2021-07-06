import React, { useEffect, useState, useContext } from 'react';
import ProfileCard from './ProfileCard';
import Grid from '@material-ui/core/Grid';
import useUserPage from '../hooks/useUserPage';
import './UserPage.scss';
import axios from 'axios';
import NavBar from './NavBar';
import { TagsContext } from '../Context/TagsContext';
import { useRadioGroup } from '@material-ui/core';
import {
  filterTags,
  getNameOfTag,
  getFilteredUsersByInterest,
  getFilteredUserProfile,
  getFilteredUsersByAge,
  getLoggedInUserInfo,
} from '../helpers/userPageHelpers';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UserPage = (props) => {
  const { users, user_tag, tags, loading } = props;
  let { id } = useParams();

  const LoggedInUserInfo = getLoggedInUserInfo(id, users);

  const LoggedInUserTagIDs = filterTags(Number(id), user_tag);

  // city name
  const LoggedInUserCity = 

  useEffect(() => {
    setState({
      ...state,
      tags: LoggedInUserTagIDs,
    });
  }, [loading]);

  const [state, setState] = useState({
    tags: [],
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
    // [{tags:[], ageRange:[], city:[]}]
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
    const selectArr = { ...state };
    selectArr.tags = [];
    setState(selectArr);
  };

  return (
    <>
      <TagsContext.Provider values={tags}>
        <NavBar
          handleTagClick={handleTagClick}
          handleAddressClick={handleAddressClick}
          handleEmptyTagsClick={handleEmptyTagsClick}
          updateAgeRange={updateAgeRange}
          ageRange={state.ageRange}
          users={users}
        />
      </TagsContext.Provider>

      <div>
        {getFilteredUserProfile(
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
      {console.log('state.tags', state.tags)}
      {console.log('state.city', state.city)}
      {console.log('state', state)}
    </>
  );
};

export default UserPage;
