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
  getLoggedInUserCity,
  getFilteredUsersByCity,
  userIdWithTagsArrObj,
  getFilteredUsersByGender,
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
  const [loggedInUserInfo, setLoggedInUserInfo] = useState([]);
  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(3);
  

  const neededInfo = getLoggedInUserInfo(id, users);
  const LoggedInUserTagIDs = filterTags(Number(id), user_tag);

  const LoggedInUserCity = getLoggedInUserCity(Number(id), users);

  const [state, setState] = useState({
    tags: [],
    // change age range to logged in user's age, 50
    ageRange: [0, 80],
    city: [],
    gender: '',
    buttonColor: 'default',
  });

  useEffect(() => {
    if (users.length !== 0) {
      setLoggedInUserInfo((prev) => [...prev, ...neededInfo]);
      setState({
        ...state,
        tags: LoggedInUserTagIDs,
        city: [LoggedInUserCity],
        gender: neededInfo[0].gender,
      });
    }
  }, [loading]);

  const updateAgeRange = (event, data) => {
    const selectArr = { ...state };
    selectArr.ageRange = data;
    setState(selectArr);
  };

  // add selected tag id into state
  const handleTagClick = (itemId) => {
    const selectArr = { ...state};
    if (selectArr.tags.includes(itemId)) {
      // remove it from array
      const index = selectArr.tags.indexOf(itemId)
      selectArr.tags.splice(index, 1)
    } else {
      // add to array
      selectArr.tags.push(itemId);
    }
    
    setState(selectArr);


    // setState.buttonColor('primary')
    
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

  const userTagObj = userIdWithTagsArrObj(users, user_tag);
  // console.log('userTagObj', userTagObj);

  // console.log('filteredByGender', filteredByGender);
  // console.log('users', users);

  const filteredByTags = getFilteredUsersByInterest(
    state.tags,
    userTagObj,
    users
  );
  // console.log('filteredByTags', filteredByTags);
  const filteredByGender = getFilteredUsersByGender(
    state.gender,
    filteredByTags
  );

  const filteredByAge = getFilteredUsersByAge(filteredByGender, state.ageRange);

  // console.log('filteredByAge', filteredByAge);

  const filteredByCity = getFilteredUsersByCity(state.city, filteredByAge);
  // console.log('filteredByCity', filteredByCity);

  const handleNextButton = (num1, num2) => {
    setStartNum((num1 += 3));
    setEndNum((num2 += 3));
  };

  const handlePreviousButton = (num1, num2) => {
    setStartNum((num1 -= 3));
    setEndNum((num2 -= 3));
  };

  return (
    <>
      <NavBar
        handleTagClick={handleTagClick}
        handleAddressClick={handleAddressClick}
        handleEmptyTagsClick={handleEmptyTagsClick}
        updateAgeRange={updateAgeRange}
        ageRange={state.ageRange}
        users={users}
        name={loggedInUserInfo}
        buttonColor={state.buttonColor}
      />

      <div className="user-page">
        {state.tags.length === 0 && state.city.length === 0 ? (
          <h1>No results</h1>
        ) : (
          filteredByCity.slice(startNum, endNum).map((filteredUser) => {
            return (
              <Grid container spacing={4} className="user-page-ind">
                <Grid item xs={12}>
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
          })
        )}
        {console.log('state', state)}
      </div>
      <div>
        {startNum > 2 && (
          <Fab
            variant="extended"
            size="small"
            color="secondary"
            aria-label="previous"
            className={classes.margin}
            onClick={() => handlePreviousButton(startNum, endNum)}
          >
            <ArrowBackIcon className={classes.extendedIcon} />
            Previous
          </Fab>
        )}
        <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="next"
          className={classes.margin}
          onClick={() => handleNextButton(startNum, endNum)}
        >
          <ArrowForwardIcon className={classes.extendedIcon} />
          Next
        </Fab>
      </div>
    </>
  );
};

export default UserPage;
