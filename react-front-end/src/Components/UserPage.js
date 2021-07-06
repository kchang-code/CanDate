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
  getFilteredUsers,
  getFilteredUserProfile,
} from '../helpers/userPageHelpers';
import Button from '@material-ui/core/Button';

const UserPage = (props) => {
  const {users, user_tag, tags} = props

  const [selectTag, setSelectTag] = useState({
    tags: [],
    buttonColor: false,
  });

  // add selected tag id into arr
  const handleTagClick = (itemId, colorFunc) => {
    const selectArr = { ...selectTag };
    // [{tags:[]}]
    selectArr.tags.push(itemId);
    setSelectTag(selectArr);

    colorFunc();
  };

  const handleEmptyTagsClick = (selectTag) => {
    const selectArr = { ...selectTag };
    selectArr.tags = [];
    setSelectTag(selectArr);
  };

 
  return (
    <>
      <TagsContext.Provider values={tags}>
        <NavBar
          handleTagClick={handleTagClick}
          handleEmptyTagsClick={handleEmptyTagsClick}
        />
      </TagsContext.Provider>

      <div>
        {selectTag.tags.length === 0
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
                    />
                  </Grid>
                </Grid>
              );
            })
          : getFilteredUserProfile(
              getFilteredUsers(selectTag.tags, user_tag),
              users
            ).map((filteredUser) => {
              return (
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={3}>
                    <ProfileCard
                      users={users}
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
      {/* {console.log('state.users', state.users)}
      {console.log('selectTag.tags', selectTag.tags)}
      {console.log('tags', tag)} */}
    </>
  );
};

export default UserPage;
