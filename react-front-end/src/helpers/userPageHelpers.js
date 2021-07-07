
export function getLoggedInUserInfo(id, users) {
  return users.filter((user) => {
    return user.id === Number(id);
  });
}

// get city for logged in user
export function getLoggedInUserCity(id, users) {
  for (const user of users) {
    if (user.id === Number(id)) {
      return user.address
    }
  }
}

// returns array of interest ids 
export function filterTags(id, userTag) {
  const tagArr = [];
  for (const tag of userTag) {
    if (tag.id === id) {
      tagArr.push(tag.interest);
    }
  }
  return tagArr;
}

// returns array of interest names
export function getNameOfTag(tagArr, tags) {
  const tagNameArr = [];
  for (const tag of tagArr) {
    for (const obj of tags) {
      if (tag === obj.id) {
        tagNameArr.push(obj.name);
      }
    }
  }
  //[movie. sport]
  let userTag = {
    tags: tagNameArr,
    //id:1
    //tags : [sport, movie]
  };
  return userTag.tags;
}

// interest filter: returns filtered array of unique userids
export function getFilteredUsersByInterest(interests, user_tag) {
  const users = [];
  for (const interest of interests) {
    for (const user of user_tag) {
      if (interest === user.interest) {
        users.push(user.id);
      }
    }
  }

  let removeRepeatedUsers = [];
  users.forEach((element) => {
    if (!removeRepeatedUsers.includes(element)) {
      removeRepeatedUsers.push(element);
    }
  });
  return removeRepeatedUsers;
}

// age filter: returns array of user ids for filtered users
export function getFilteredUsersByAge(users, ageRange) {
  const userIds = [];
  for (const user of users) {
    if (user.age >= ageRange[0] && user.age <= ageRange[1]) {
      userIds.push(user.id);
    }
  }
  return userIds;
}

// city filter: returns array of user ids who live in those cities 
export function getFilteredUsersByCity(cities, users) {
  const userId = [];
  for (const user of users) {
    for (const city of cities) {
      if (city === user.address){
        userId.push(user.id)
      }
    }
  }
  return userId;
}
// return array of objects for filtered users
export function getFilteredUserProfile(filteredUserIds, filteredAgeIds, filteredCityIds, users) {
  const userProfiles = [];
  const filteredIds = [];
  filteredUserIds.forEach((element) => {
    if (filteredAgeIds.includes(element)) {
      filteredIds.push(element);
    }
  });

  // loop through users to find the user profiles
  for (const user of users) {
    for (const userId of filteredIds) {
      if (user.id === userId) {
        userProfiles.push(user);
      }
    }
  }
  // return userProfiles: [{}, {}]
  // return duplicates of userProfiles and filteredCityIds
  let result = [];
  userProfiles.forEach((element) => {
    if (filteredCityIds.includes(element.id)) {
      result.push(element.id);
    }
  });
  return result;
}