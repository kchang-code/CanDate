webpackHotUpdate("main",{

/***/ "./src/Components/UserPage.js":
/*!************************************!*\
  !*** ./src/Components/UserPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard */ "./src/Components/ProfileCard.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserPage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserPage.scss */ "./src/Components/UserPage.scss");
/* harmony import */ var _UserPage_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UserPage_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ "./src/Components/NavBar.js");
/* harmony import */ var _helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/userPageHelpers */ "./src/helpers/userPageHelpers.js");
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom/cjs/react-router-dom.min */ "./node_modules/react-router-dom/cjs/react-router-dom.min.js");
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ "./node_modules/@material-ui/icons/ArrowForward.js");
/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_favoriteBlockHelp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/favoriteBlockHelp */ "./src/helpers/favoriteBlockHelp.js");
/* harmony import */ var _helpers_favoriteBlockHelp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_helpers_favoriteBlockHelp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Status */ "./src/Components/Status.js");
/* harmony import */ var _NoResult__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NoResult */ "./src/Components/NoResult.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/ziaotan/lighthouse/final/CanDate/react-front-end/src/Components/UserPage.js",
    _s = __webpack_require__.$Refresh$.signature();
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const UserPage = props => {
  _s();

  const classes = useStyles();
  const {
    users,
    user_tag,
    tags,
    loading
  } = props;
  let {
    id
  } = Object(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_6__["useParams"])();
  const [loggedInUserInfo, setLoggedInUserInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [startNum, setStartNum] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [endNum, setEndNum] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);
  const [checkedA, setCheckedA] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const neededInfo = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getLoggedInUserInfo"])(id, users);
  const LoggedInUserTagIDs = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["filterTags"])(Number(id), user_tag);
  const LoggedInUserCity = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getLoggedInUserCity"])(Number(id), users);
  const [openMsg, setOpenMsg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleMessageClose = e => {
    e.stopPropagation();
    setOpenMsg(false);
  };

  const handleMessageOpen = e => {
    e.stopPropagation();
    setOpenMsg(true);
  };

  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    tags: [],
    // change age range to logged in user's age, 50
    ageRange: [20, 80],
    city: [],
    gender: '',
    favorite: false,
    loginUserTags: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (users.length !== 0) {
      setLoggedInUserInfo(prev => [...prev, ...neededInfo]);
      setState({ ...state,
        tags: [],
        city: [],
        gender: neededInfo[0].gender,
        loginUserTags: LoggedInUserTagIDs
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [loading]);
  const filteredFavoriteId = Object(_helpers_favoriteBlockHelp__WEBPACK_IMPORTED_MODULE_11__["getFavoriteByUser"])(props.favorite, Number(id));
  const filteredUserIBlockId = Object(_helpers_favoriteBlockHelp__WEBPACK_IMPORTED_MODULE_11__["getUserIBlock"])(props.block, Number(id)); // console.log('blocked ', filteredUserIBlockId);
  // const filteredBlockUsers = filteredUserIBlockId.map((id) => users[id - 1]);

  const filteredFavoriteUsers = filteredFavoriteId.map(id => users[id - 1]);

  const updateAgeRange = (event, data) => {
    const selectArr = { ...state
    };
    selectArr.ageRange = data;
    setState(selectArr);
  }; // add selected tag id into state


  const handleTagClick = itemId => {
    const selectArr = { ...state
    };

    if (selectArr.tags.includes(itemId)) {
      // remove it from array
      const index = selectArr.tags.indexOf(itemId);
      selectArr.tags.splice(index, 1);
    } else {
      // add to array
      selectArr.tags.push(itemId);
    }

    setState(selectArr);
  }; // add selected address into state


  const handleAddressClick = city => {
    const selectArr = { ...state
    };

    if (selectArr.city.includes(city)) {
      const index = selectArr.city.indexOf(city);
      selectArr.city.splice(index, 1);
    } else {
      selectArr.city.push(city);
    }

    setState(selectArr);
  };

  const handleEmptyTagsClick = state => {
    const selectArr = { ...state,
      tags: [],
      city: [],
      ageRange: [0, 18],
      gender: '',
      loginUserTags: []
    };
    setState(selectArr);
    setCheckedA(false);
  };

  const handleFavorite = () => {
    if (state.favorite) {
      console.log('endNum', endNum);
      setState({ ...state,
        tags: [],
        city: [],
        ageRange: [20, 80],
        gender: neededInfo[0].gender,
        favorite: false,
        loginUserTags: LoggedInUserTagIDs
      });
    } else {
      setEndNum(3);
      setStartNum(0);
      setState({ ...state,
        tags: [],
        city: [],
        ageRange: [20, 80],
        gender: '',
        favorite: true
      });
    }
  };

  const userTagObj = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["userIdWithTagsArrObj"])(users, user_tag);
  const matchObj = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getUserIdWithMatchPointObj"])(state.loginUserTags, userTagObj, users, state.loginUserTags);
  const sortedUsers = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getSortedUsers"])(matchObj, users); // console.log('userTagObj', userTagObj);
  // console.log('filteredByGender', filteredByGender);
  // console.log('users', users);

  let filteredByTags;

  if (state.favorite) {
    filteredByTags = filteredFavoriteUsers;
  } else {
    filteredByTags = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getFilteredUsersByInterest"])(state.tags, userTagObj, sortedUsers);
  } // console.log('filteredByTags', filteredByTags);


  const filteredByGender = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getFilteredUsersByGender"])(state.gender, filteredByTags);
  const filteredByAge = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getFilteredUsersByAge"])(filteredByGender, state.ageRange); // console.log('filteredByAge', filteredByAge);

  const filteredUsersByBlocked = Object(_helpers_favoriteBlockHelp__WEBPACK_IMPORTED_MODULE_11__["getUsersByBlocked"])(filteredByAge, filteredUserIBlockId); // console.log(filteredUsersByBlocked);

  const filteredHimself = filteredUsersByBlocked.filter(user => user.id !== Number(id));
  const filteredByCity = Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getFilteredUsersByCity"])(state.city, filteredHimself); // console.log('filteredByCity', filteredByCity);

  if (filteredByCity.length > 0 && state.ageRange[0] === 0) {
    setState({ ...state,
      ageRange: [1, 19]
    });
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
    setStartNum(num1 += 3);
    setEndNum(num2 += 3);
  };

  const handlePreviousButton = (num1, num2) => {
    setStartNum(num1 -= 3);
    setEndNum(num2 -= 3);
  };

  return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_Status__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 5
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
    className: "user",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleTagClick: handleTagClick,
      handleAddressClick: handleAddressClick,
      handleEmptyTagsClick: handleEmptyTagsClick,
      updateAgeRange: updateAgeRange,
      ageRange: state.ageRange,
      users: users,
      name: loggedInUserInfo,
      handleFavorite: handleFavorite,
      setGender: setState,
      state: state,
      openMsg: openMsg,
      setOpenMsg: setOpenMsg,
      handleMessageClose: handleMessageClose,
      handleMessageOpen: handleMessageOpen,
      setStartNum: setStartNum,
      setEndNum: setEndNum,
      checkedA: checkedA,
      setCheckedA: setCheckedA
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
      className: "user-page",
      children: state.tags.length === 0 && state.city.length === 0 && !state.favorite && state.gender === '' && state.ageRange[0] === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_NoResult__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 11
      }, undefined) : filteredByCity.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_NoResult__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }, undefined) : filteredByCity.slice(startNum, endNum).map(filteredUser => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          container: true,
          spacing: 4,
          className: "user-page-ind",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ProfileCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
              id: filteredUser.id,
              name: filteredUser.first_name,
              last_name: filteredUser.last_name,
              city: filteredUser.address,
              age: filteredUser.age,
              gender: filteredUser.gender,
              about_me: filteredUser['about_me'],
              height: filteredUser.height,
              address: filteredUser.address,
              profile_photo: filteredUser.profile_photo,
              tag: Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["getNameOfTag"])(Object(_helpers_userPageHelpers__WEBPACK_IMPORTED_MODULE_5__["filterTags"])(filteredUser.id, user_tag), tags),
              messages: props.messages,
              setMessages: props.setMessages //zio testing
              ,
              filteredFavoriteId: filteredFavoriteId,
              users: props.users,
              loading: props.loading,
              realTimeData: props.realTimeData,
              favorite: props.favorite,
              block: props.block,
              setFavorite: props.setFavorite,
              setBlock: props.setBlock,
              matchPercentage: filteredUser.percent,
              openMsg: openMsg,
              setOpenMsg: setOpenMsg,
              handleMessageClose: handleMessageClose,
              handleMessageOpen: handleMessageOpen
            }, filteredUser.id, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 19
            }, undefined)
          }, filteredUser.id, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 17
          }, undefined)
        }, filteredUser.id, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 15
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
      id: "user-page-button",
      children: [startNum > 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
        className: "wrapper-left",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
          className: "cta-left",
          onClick: () => handlePreviousButton(startNum, endNum),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("svg", {
              width: "66px",
              height: "43px",
              viewBox: "0 0 66 43",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("g", {
                id: "arrow-left",
                stroke: "none",
                "stroke-width": "1",
                fill: "none",
                "fill-rule": "evenodd",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("path", {
                  className: "one-left",
                  d: "M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z",
                  fill: "#FFFFFF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("path", {
                  class: "two-left",
                  d: "M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z",
                  fill: "#FFFFFF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("path", {
                  class: "three-left",
                  d: "M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z",
                  fill: "#FFFFFF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
            className: "button-label-left",
            children: " Prev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 11
      }, undefined), endNum < filteredByCity.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
        className: "wrapper-right",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("a", {
          className: "cta-right",
          onClick: () => handleNextButton(startNum, endNum),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
            className: "button-label-right",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("svg", {
              width: "66px",
              height: "43px",
              viewBox: "0 0 66 43",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("g", {
                id: "arrow",
                stroke: "none",
                "stroke-width": "1",
                fill: "none",
                "fill-rule": "evenodd",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("path", {
                  className: "one-right",
                  d: "M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z",
                  fill: "#FFFFFF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("path", {
                  className: "two-right",
                  d: "M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z",
                  fill: "#FFFFFF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("path", {
                  className: "three-right",
                  d: "M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z",
                  fill: "#FFFFFF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 407,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 381,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 11
      }, undefined) // <Fab
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
      ]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 249,
    columnNumber: 5
  }, undefined);
};

_s(UserPage, "femHdAligRbAkot58/S82QXmus8=", false, function () {
  return [useStyles, react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_6__["useParams"]];
});

_c = UserPage;
/* harmony default export */ __webpack_exports__["default"] = (UserPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "UserPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.dd9d00021ea519e7d291.hot-update.js.map