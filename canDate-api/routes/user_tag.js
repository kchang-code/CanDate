const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT username, tags.name AS interest FROM tags JOIN user_tag ON tags.id = tag_id
    JOIN users ON users.id = user_id;`
    )
      .then((data) => {
        const user_tag = data.rows;
        res.json({ user_tag });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
