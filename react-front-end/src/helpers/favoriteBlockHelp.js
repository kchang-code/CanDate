const getFavoriteByUser = (favorite, id) => {
  let result = [];

  let filteredFavorite = favorite.filter((user) => {
    return Number(user.user_id) === Number(id);
  });
  filteredFavorite.forEach((element) => {
    if (!result.includes(element.favorite_user_id)) {
      result.push(element.favorite_user_id);
    }
  });
  return result;
};

const getUserBlockMe = (block, id) => {
  let result = [];
  let filteredBlock = block.filter((user) => {
    return Number(user.block_user_id) === Number(id);
  });
  filteredBlock.forEach((element) => {
    result.push(element.user_id);
  });
  return result;
};

const getUserIBlock = (block, id) => {
  let result = [];
  let filteredBlock = block.filter((user) => {
    return Number(user.user_id) === Number(id);
  });
  filteredBlock.forEach((element) => {
    result.push(element.block_user_id);
  });
  return result;
};

module.exports = {
  getFavoriteByUser,
  getUserBlockMe,
  getUserIBlock,
};
