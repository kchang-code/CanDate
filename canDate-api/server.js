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

// console.log("module.exports", app);

module.exports = app;

//socket io goes here
// io.on("connection", (socket) => {
//   console.log("new client connected");
//   console.log(socket.id);
// });

// const socket = require("socket.io");

// const io = socket(server);

// io.on("connection", (socket) => {
//   console.log("New client connected");

//   // socket.on("disconnect", () => {
//   //   console.log("Client disconnected");
//   // });
// });

// app.ws("/message", function (ws, req) {
//   // console.log("ws", ws.id);
//   ws.on("message", function (msg) {
//     console.log(msg);
//     ws.send("hello");
//   });
//   console.log("socket");
// });
