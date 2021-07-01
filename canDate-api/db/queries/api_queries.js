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
  SELECT username, tags.name AS interest
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

module.exports = {
  getAllTags,
  getAllUsers,
  getAllUserTags,
};
