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
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({

  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const UserPage = (props) => {
  const classes = useStyles();
  const { users, user_tag, tags, loading } = props;
  let { id } = useParams();
  const [loggedInUserInfo, setLoggedInUserInfo] = useState([])
  const [startNum, setStartNum] = useState(0)
  const [endNum, setEndNum] = useState(3)

  const neededInfo = getLoggedInUserInfo(id, users);
  const LoggedInUserTagIDs = filterTags(Number(id), user_tag);

  useEffect(() => {
    if (users.length !== 0) {
      setLoggedInUserInfo(prev => [...prev, ...neededInfo])
      console.log("log", loggedInUserInfo)
    }
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

  const handleNextButton = (num1, num2) => {

    setStartNum(num1 += 3)
    setEndNum(num2 += 3)
  }

  const handlePreviousButton = (num1, num2) => {
    setStartNum(num1 -= 3)
    setEndNum(num2 -= 3)
  }

  // useEffect(() => {
  //   handleNextButton()
  // }, [handleNextButton()]);


  // useEffect(() => {
  //   handlePreviousButton()
  // }, [handlePreviousButton()]);


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
          name={loggedInUserInfo}

        />
      </TagsContext.Provider>

      <div className="user-page">
        {getFilteredUserProfile(
          getFilteredUsersByInterest(state.tags, user_tag),
          getFilteredUsersByAge(users, state.ageRange),
          users
        ).slice(startNum, endNum).map((filteredUser) => {
          return (
            <Grid container spacing={2} className="user-page-ind">
              <Grid item xs={12} >
                <ProfileCard
                  key={filteredUser.id}
                  name={filteredUser.first_name}
                  age={filteredUser.age}
                  address={filteredUser.address}
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

      <div>
        {startNum > 2 && <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="previous"
          className={classes.margin}
          onClick={() => handlePreviousButton(startNum, endNum)}
        >
          <ArrowBackIcon
            className={classes.extendedIcon}
          />
          Previous
        </Fab>}
        <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="next"
          className={classes.margin}
          onClick={() => handleNextButton(startNum, endNum)}
        >
          <ArrowForwardIcon
            className={classes.extendedIcon}
          />
          Next
        </Fab>
      </div>
      {console.log('state.tags', state.tags)}
      {console.log('state.city', state.city)}
      {console.log('state', state)}
    </>
  );
};

export default UserPage;
