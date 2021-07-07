// returns array of interest ids

export function getLoggedInUserInfo(id, users) {
  return users.filter((user) => {
    return user.id === Number(id);
  });
}

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

// interest filter: returns filtered array of unique userids
export function getFilteredUsersByInterest(interests, user_tag) {
  const users = [];
  for (const interest of interests) {
    for (const user of user_tag) {
      if (interest === user['interest'] && !users.includes(user.id)) {
        users.push(user.id);
      }
    }
    users.push();
  }

  // let removeRepeatedUsers = [];
  // users.forEach((element) => {
  //   if (!removeRepeatedUsers.includes(element)) {
  //     removeRepeatedUsers.push(element);
  //   }
  // });
  return users;
}

// age filter: returns array of user ids for filtered users
export function getFilteredUsersByAge(users, ageRange, filteredUserIdArr) {
  const userIds = [];
  filteredUserIdArr.forEach((userId) => {
    if (
      users[userId - 1].age >= ageRange[0] &&
      users[userId - 1].age <= ageRange[1]
    ) {
      userIds.push(users[userId - 1].id);
    }
  });

  // for (const user of users) {
  //   if (user.age >= ageRange[0] && user.age <= ageRange[1]) {
  //     userIds.push(user.id);
  //   }
  // }
  return userIds;
}

// return array of objects for filtered users
export function getFilteredUserProfile(filteredUserIds, filteredAgeIds, users) {
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
  return userProfiles;
}
