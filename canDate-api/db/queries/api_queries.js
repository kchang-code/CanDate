const db = require("../../lib/connection");

const getAllUsers = () => {
  const queryStatement = `SELECT * FROM users`;
  return db
    .query(queryStatement)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err;
    });
};

const getAllUserTags = () => {
  const queryStatement = `
  SELECT users.id, tags.id AS interest
  FROM tags
  JOIN user_tag ON tags.id = tag_id
  JOIN users ON users.id = user_id;
  `;
  return db
    .query(queryStatement)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err;
    });
};

const getAllTags = () => {
  const queryStatement = `SELECT * FROM tags`;
  return db
    .query(queryStatement)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err;
    });
};

const getAllMessages = () => {
  const queryStatement = `SELECT * FROM message

  `;
  return db
    .query(queryStatement)
    .then((response) => {
      return response.rows;
    })
    .catch((err) => {
      return err;
    });
};

const creatNewUser = (newUser) => {
  const value = [
    newUser["first_name"],
    newUser["last_name"],
    newUser["email"],
    newUser["password"],
  ];

  const queryStatement = `INSERT INTO users(first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4)`;
  return db.query(queryStatement, value).catch((err) => {
    return err;
  });
};

const createNewMessage = (newMessage) => {
  const value = [
    newMessage["to_user_id"],
    newMessage["from_user_id"],
    newMessage["content"],
  ];

  const queryStatement = `INSERT INTO message(to_user_id, from_user_id, content)
  VALUES ($1, $2, $3)`;

  console.log("---------------", value, queryStatement);
  return (
    db
      .query(queryStatement, value)
      // .then(() => {
      //   console.log("successes");
      // })
      .catch((err) => {
        return err;
      })
  );
};

module.exports = {
  getAllTags,
  getAllUsers,
  getAllUserTags,
  getAllMessages,
  creatNewUser,
  createNewMessage,
};
