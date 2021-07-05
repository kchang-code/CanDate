export function filterTags (id, userTag)  {
  const tagArr = [];
  for (const tag of userTag) {
    if (tag.id === id) {
      tagArr.push(tag.interest);
    }
  }
  return tagArr;
};

export function  getNameOfTag (tagArr, tags)  {
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
};



// returns filtered array of unique userids 
export function  getFilteredUsers (interests, user_tagArr)  {
  const users = [];
  for (const interest of interests) {
    for (const user of user_tagArr) {
      if (interest === user.interest) {
        users.push(user.id)
      }
    }
  }

  let removeRepeatedUsers = [];
  users.forEach(element => {
    if (!removeRepeatedUsers.includes(element)) {
      removeRepeatedUsers.push(element)
    }
  })
  return removeRepeatedUsers; 
}
