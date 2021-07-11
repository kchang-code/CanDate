import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import Grid from '@material-ui/core/Grid';
import './UserPage.scss';
import NavBar from './NavBar';
import {
  filterTags,
  getNameOfTag,
  getFilteredUsersByInterest,
  getFilteredUsersByAge,
  getLoggedInUserInfo,
  getLoggedInUserCity,
  getFilteredUsersByCity,
  userIdWithTagsArrObj,
  getFilteredUsersByGender,
  getUserIdWithMatchPointObj,
  getSortedUsers,
} from '../helpers/userPageHelpers';
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
import Status from './Status';

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

  const [openMsg, setOpenMsg] = useState(false);
  const handleMessageClose = (e) => {
    e.stopPropagation();
    setOpenMsg(false);
  };
  const handleMessageOpen = (e) => {
    e.stopPropagation();
    setOpenMsg(true);
  };

  const [state, setState] = useState({
    tags: [],
    // change age range to logged in user's age, 50
    ageRange: [20, 80],
    city: [],
    gender: '',
    favorite: false,
    loginUserTags: [],
  });

  useEffect(() => {
    if (users.length !== 0) {
      setLoggedInUserInfo((prev) => [...prev, ...neededInfo]);
      setState({
        ...state,
        tags: [],
        city: [],
        gender: neededInfo[0].gender,
        loginUserTags: LoggedInUserTagIDs,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const selectArr = {
      ...state,
      tags: [],
      city: [],
      ageRange: [0, 18],
      gender: '',
      loginUserTags: [],
    };
    setState(selectArr);
  };

  const handleFavorite = () => {
    if (state.favorite) {
      console.log('endNum', endNum);
      setState({
        ...state,
        tags: LoggedInUserTagIDs,
        city: [LoggedInUserCity],
        ageRange: [20, 80],
        gender: neededInfo[0].gender,
        favorite: false,

        loginUserTags: LoggedInUserTagIDs,
      });
    } else {
      setEndNum(3);
      setStartNum(0);
      setState({
        ...state,
        tags: [],
        city: [],
        ageRange: [20, 80],
        gender: '',
        favorite: true,
      });
    }
  };

  const userTagObj = userIdWithTagsArrObj(users, user_tag);
  const matchObj = getUserIdWithMatchPointObj(
    state.loginUserTags,
    userTagObj,
    users,
    state.loginUserTags
  );

  const sortedUsers = getSortedUsers(matchObj, users);
  // console.log('userTagObj', userTagObj);

  // console.log('filteredByGender', filteredByGender);
  // console.log('users', users);

  let filteredByTags;
  if (state.favorite) {
    filteredByTags = filteredFavoriteUsers;
  } else {
    filteredByTags = getFilteredUsersByInterest(
      state.tags,
      userTagObj,
      sortedUsers
    );
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

  const filteredHimself = filteredUsersByBlocked.filter(
    (user) => user.id !== Number(id)
  );

  const filteredByCity = getFilteredUsersByCity(state.city, filteredHimself);
  // console.log('filteredByCity', filteredByCity);

  if (filteredByCity.length > 0 && state.ageRange[0] === 0) {
    setState({ ...state, ageRange: [1, 19] });
  }

  function addMatchPointPercentage(users, matchObj) {
    for (const user of users) {
      for (const match of matchObj) {
        if (user.id === match.userId) {
          user.percent = match.percentage;
        }
      }
    }
  }

  addMatchPointPercentage(users, matchObj);

  const handleNextButton = (num1, num2) => {
    setStartNum((num1 += 3));
    setEndNum((num2 += 3));
  };

  const handlePreviousButton = (num1, num2) => {
    setStartNum((num1 -= 3));
    setEndNum((num2 -= 3));
  };

  return loading ? (
    <Status />
  ) : (
    <div className="user">
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
        openMsg={openMsg}
        setOpenMsg={setOpenMsg}
        handleMessageClose={handleMessageClose}
        handleMessageOpen={handleMessageOpen}
      />
      <div className="user-page">
        {state.tags.length === 0 &&
          state.city.length === 0 &&
          !state.favorite &&
          state.gender === '' &&
          state.ageRange[0] === 0 ? (
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
              <Grid
                key={filteredUser.id}
                container
                spacing={4}
                className="user-page-ind"
              >
                <Grid key={filteredUser.id} item xs={12}>
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
                    openMsg={openMsg}
                    setOpenMsg={setOpenMsg}
                    handleMessageClose={handleMessageClose}
                    handleMessageOpen={handleMessageOpen}
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
          <div className="wrapper-left">
            <a className="cta-left" onClick={() => handlePreviousButton(startNum, endNum)} >
              <span>
                <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="arrow-left" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path className="one-left" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path class="two-left" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path class="three-left" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </span>
              <span className="button-label-left"> Prev</span>
            </a>
          </div>
        )}
        {endNum < filteredByCity.length && (
          <div className="wrapper-right">
            <a className="cta-right" onClick={() => handleNextButton(startNum, endNum)} >
              <span className="button-label-right">Next</span>
              <span>
                <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path className="one-right" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className="two-right" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className="three-right" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
          // <Fab
          //   variant="extended"
          //   size="small"
          //   style={{ backgroundColor: '#f2a1a3' }}
          //   aria-label="next"
          //   className={classes.margin}
          //   onClick={() => handleNextButton(startNum, endNum)}
          // >
          //   <ArrowForwardIcon className={classes.extendedIcon} />
          //   Next
          // </Fab>
        )}
      </div>
    </div>
  );
};


export default UserPage;
