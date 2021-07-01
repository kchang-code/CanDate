// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const morgan = require("morgan");
const db = require("./lib/connection.js");
db.connect();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const usersRoutes = require("./routes/users");
const tagsRoutes = require("./routes/tags");
const userTagRoutes = require("./routes/user_tag");

app.use("/api/users", usersRoutes(db));
app.use("/api/tags", tagsRoutes(db));
app.use("/api/user_tag", userTagRoutes(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
