const express = require("express");
const router = express.Router();
const apiQueries = require("../db/queries/api_queries");

router.get("/users", (req, res) => {
  apiQueries
    .getAllUsers()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/tags", (req, res) => {
  apiQueries
    .getAllTags()
    .then((tags) => {
      res.json({ tags });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/user_tag", (req, res) => {
  apiQueries
    .getAllUserTags()
    .then((user_tag) => {
      res.json({ user_tag });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
