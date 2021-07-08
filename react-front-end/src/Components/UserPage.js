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
  getUserIdWithMatchPointObj,
} from '../helpers/userPageHelpers';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  getFavoriteByUser,
  getUserIBlock,
  getUsersByBlocked,
} from '../helpers/favoriteBlockHelp';

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
    ageRange: [20, 80],
    city: [],
    gender: '',
    favorite: false,
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

  const filteredFavoriteId = getFavoriteByUser(props.favorite, Number(id));

  const filteredUserIBlockId = getUserIBlock(props.block, Number(id));
  // console.log('blocked ', filteredUserIBlockId);

  // const filteredBlockUsers = filteredUserIBlockId.map((id) => users[id - 1]);

  const filteredFavoriteUsers = filteredFavoriteId.map((id) => users[id - 1]);
  
  const updateAgeRange = (event, data) => {
    const selectArr = { ...state };
    selectArr.ageRange = data;
    setState(selectArr);
  };


  // add selected tag id into state
  const handleTagClick = (itemId) => {
    const selectArr = { ...state };
    if (selectArr.tags.includes(itemId)) {
      // remove it from array
      const index = selectArr.tags.indexOf(itemId);
      selectArr.tags.splice(index, 1);
    } else {
      // add to array
      selectArr.tags.push(itemId);
    }

    setState(selectArr);
  };

  // add selected address into state
  const handleAddressClick = (city) => {
    const selectArr = { ...state };
    if (selectArr.city.includes(city)) {
      const index = selectArr.city.indexOf(city);
      selectArr.city.splice(index, 1);
    } else {
      selectArr.city.push(city);
    }
    setState(selectArr);
  };

  const handleEmptyTagsClick = (state) => {
    const selectArr = { ...state, tags: [], city: [], ageRange: [18, 40] };
    setState(selectArr);
  };

  const handleFavorite = () => {
    if (state.favorite) {
      console.log('endNum', endNum);
      setState({
        ...state,
        tags: LoggedInUserTagIDs,
        city: [],
        ageRange: [],
        gender: '',
        favorite: false,
      });
    } else {
      setEndNum(3);
      setStartNum(0);
      setState({
        ...state,
        tags: [],
        city: [],
        gender: '',
        favorite: true,
      });
    }
  };

  const userTagObj = userIdWithTagsArrObj(users, user_tag);
  // console.log('userTagObj', userTagObj);

  // console.log('filteredByGender', filteredByGender);
  // console.log('users', users);


  let filteredByTags;
  if (state.favorite) {
    filteredByTags = filteredFavoriteUsers;
  } else {
    filteredByTags = getFilteredUsersByInterest(state.tags, userTagObj, users);
  }

  // console.log('filteredByTags', filteredByTags);
  const filteredByGender = getFilteredUsersByGender(
    state.gender,
    filteredByTags
  );

  const filteredByAge = getFilteredUsersByAge(filteredByGender, state.ageRange);

  // console.log('filteredByAge', filteredByAge);

  const filteredUsersByBlocked = getUsersByBlocked(
    filteredByAge,
    filteredUserIBlockId
  );

  // console.log(filteredUsersByBlocked);

  const filteredByCity = getFilteredUsersByCity(
    state.city,
    filteredUsersByBlocked
  );
  // console.log('filteredByCity', filteredByCity);

  const matchObj = getUserIdWithMatchPointObj(state.tags, userTagObj, users, state.tags)

function addMatchPointPercentage(filteredByCity, matchObj ) {
   for (const obj of filteredByCity) {
     for (const match of matchObj) {
       if (obj.id === match.userId) {
         obj.percent = match.percentage
       }
     }
   }
  }

  addMatchPointPercentage(filteredByCity, matchObj )

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
        handleFavorite={handleFavorite}
        setGender={setState}
        state={state}
      />
      <div className="user-page">
        {state.tags.length === 0 &&
        state.city.length === 0 &&
        !state.favorite ? (
          <div class="no-results">
            <h1>No results</h1>
            <p>Please filter again!</p>
          </div>
        ) : filteredByCity.length === 0 ? (
          <div class="no-results">
            <h1>No results</h1>
            <p>Please filter again!</p>
          </div>
        ) : (
          filteredByCity.slice(startNum, endNum).map((filteredUser) => {
            return (
              <Grid container spacing={4} className="user-page-ind">
                <Grid item xs={12}>
                  <ProfileCard
                    key={filteredUser.id}
                    id={filteredUser.id}
                    name={filteredUser.first_name}
                    last_name={filteredUser.last_name}
                    city={filteredUser.address}
                    age={filteredUser.age}
                    gender={filteredUser.gender}
                    about_me={filteredUser['about_me']}
                    height={filteredUser.height}
                    address={filteredUser.address}
                    profile_photo={filteredUser.profile_photo}
                    tag={getNameOfTag(
                      filterTags(filteredUser.id, user_tag),
                      tags
                    )}
                    messages={props.messages}
                    setMessages={props.setMessages}
                    //zio testing
                    filteredFavoriteId={filteredFavoriteId}
                    users={props.users}
                    loading={props.loading}
                    realTimeData={props.realTimeData}
                    favorite={props.favorite}
                    block={props.block}
                    setFavorite={props.setFavorite}
                    setBlock={props.setBlock}
                    matchPercentage={filteredUser.percent}
                  />
                </Grid>
              </Grid>
            );
          })
        )}
        {/* {console.log('state', state)} */}
      </div>
      <div id="user-page-button">
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
        {endNum < filteredByCity.length && (
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
        )}
      </div>
    </>
  );
};

export default UserPage;
