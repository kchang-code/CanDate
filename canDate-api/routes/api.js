const express = require("express");
const router = express.Router();
const apiQueries = require("../db/queries/api_queries");

router.get("/users", (req, res) => {
  apiQueries
    .getAllUsers()
    .then((users) => {
      res.json({users});
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

router.get("/message", (req, res) => {
  apiQueries
    .getAllMessages()
    .then((message) => {
      console.log(message);
      res.json({ message });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/users", (req, res) => {
  console.log(req.body.newUser);
  res.json("success");
  apiQueries.creatNewUser(req.body.newUser).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
