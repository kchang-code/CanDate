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

app.use("/api/users", usersRoutes(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
