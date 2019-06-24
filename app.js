const express = require("express");
const bodyParser = require("body-parser");

const messagesRouter = require("./routes/messages");

const app = express();

//parses body requests to application/json
app.use(bodyParser.json());

//set headers for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//set middleware for message routes
app.use(messagesRouter);

module.exports = app;
