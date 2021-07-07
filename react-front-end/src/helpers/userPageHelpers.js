export function getLoggedInUserInfo(id, users) {
  return users.filter((user) => {
    return user.id === Number(id);
  });
}

// get city for logged in user
export function getLoggedInUserCity(id, users) {
  for (const user of users) {
    if (user.id === Number(id)) {
      return user.address;
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

export function userIdWithTagsArrObj(users, userTag) {
  const Obj = {};
  users.forEach((user) => {
    const objId = user.id;
    Obj[objId] = filterTags(user.id, userTag);
  });
  return Obj;
}

// returns array of interest names
export function getNameOfTag(tagArr, tags) {
  const tagNameArr = [];
  for (const tagId of tagArr) {
    // for (const obj of tags) {
    //   if (tag === obj.id) {
    //     tagNameArr.push(obj.name);
    //   }
    // }
    tagNameArr.push(tags[tagId - 1].name);
  }
  //[movie. sport]
  let userTag = {
    tags: tagNameArr,
    //id:1
    //tags : [sport, movie]
  };
  return userTag.tags;
}

// interest filter: returns filtered array of unique users
export function getFilteredUsersByInterest(interests, userTagObj, users) {
  const filteredUsersId = [];
  const checkIfContainsAllInterest = (userInterests, requiredInterests) => {
    let result = true;

    requiredInterests.forEach((requiredInterest) => {
      if (!userInterests.includes(requiredInterest)) {
        result = false;
      }
    });

    return result;
  };

  for (const userId in userTagObj) {
    if (checkIfContainsAllInterest(userTagObj[userId], interests)) {
      filteredUsersId.push(userId);
    }
  }

  let filteredUsers = [];

  filteredUsersId.forEach((userId) => {
    filteredUsers.push(users[userId - 1]);
  });

  return filteredUsers;
}

// age filter: returns array of user ids for filtered users
export function getFilteredUsersByAge(users, ageRange) {
  const filteredUsers = [];

  if (ageRange.length === 0) {
    return users;
  }

  for (const user of users) {
    if (user.age >= ageRange[0] && user.age <= ageRange[1]) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}

// city filter: returns array of user ids who live in those cities
export function getFilteredUsersByCity(cities, users) {
  const filteredUsers = [];
  // for (const user of users) {
  //   for (const city of cities) {
  //     if (city === user.address) {
  //       filteredUsers.push(user.id);
  //     }
  //   }
  // }
  if (cities.length === 0) {
    return users;
  }
  users.forEach((eachUser) => {
    if (cities.includes(eachUser.address)) {
      filteredUsers.push(eachUser);
    }
  });
  return filteredUsers;
}
// return array of objects for filtered users
// export function getFilteredUserProfile(
//   filteredUserIds,
//   filteredAgeIds,
//   filteredCityIds,
//   users
// ) {
//   const userProfiles = [];
//   const filteredIds = [];
//   filteredUserIds.forEach((element) => {
//     if (filteredAgeIds.includes(element)) {
//       filteredIds.push(element);
//     }
//   });

//   const allFilteredIds = filteredIds.concat(filteredCityIds);

//   // loop through users to find the user profiles
//   for (const user of users) {
//     for (const userId of allFilteredIds) {
//       if (user.id === userId) {
//         userProfiles.push(user);
//       }
//     }
//   }

//   return userProfiles;
// }
