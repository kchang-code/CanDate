require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const expressWs = require("express-ws")(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const morgan = require("morgan");
const db = require("./lib/connection.js");
db.connect();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(cors());

const apiRoutes = require("./routes/api")(app);

app.use("/api", apiRoutes);

module.exports = app;
