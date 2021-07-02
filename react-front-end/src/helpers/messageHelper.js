const reduceToNames = (message) => {
  let id = [];
  let result = [];
  message.forEach((el) => {
    if (!id.includes(el['to_user_id'])) {
      result.push(el);
      id.push(el['to_user_id']);
    }
  });
  return result;
};

const filteredMessageByLoginUser = (message, loginUserId) => {
  let result = [];
};

// const filterAllMessageByUser = (message, id) => {
//   let result = [];
//   message.forEach((el) => {
//     if (id === el.)
//   })
//   return result;
// };

module.exports = {
  reduceToNames,
  // filterMessageById,
};
