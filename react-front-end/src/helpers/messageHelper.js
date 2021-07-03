const reduceToNames = (message, userId) => {
  let id = [];
  let result = [];
  message.forEach((el) => {
    if (!id.includes(el['to_user_id']) && Number(userId) !== el['to_user_id']) {
      result.push(el);
      id.push(el['to_user_id']);
    }
  });

  return result;
};

const filteredMessageByLoginUser = (messages, loginUserId) => {
  return messages.filter((message) => {
    console.log('TYPE OF TOUSER', typeof message['to_user_id']);
    return (
      message['to_user_id'] === Number(loginUserId) ||
      message['from_user_id'] === Number(loginUserId)
    );
  });
};

const filteredMessageBySelectedUser = (messages, selectedUserId) => {
  return messages.filter((message) => {
    return (
      message['to_user_id'] === Number(selectedUserId) ||
      message['from_user_id'] === Number(selectedUserId)
    );
  });
};

const filterMessageByToUserId = (messages, selectedUserId) => {
  return messages.filter((message) => {
    return message['to_user_id'] === Number(selectedUserId);
  });
};

const getRidOfUsersChatBox = (messages, userId) => {
  return messages.filter((message) => {
    return message['to_user_id'] !== Number(userId);
  });
};

module.exports = {
  reduceToNames,
  filterMessageByToUserId,
  filteredMessageByLoginUser,
  getRidOfUsersChatBox,
  filteredMessageBySelectedUser,
};
