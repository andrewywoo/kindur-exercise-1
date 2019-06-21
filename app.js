const express = require("express");
const bodyParser = require("body-parser");

const messagesRouter = require("./routes/messages");

const app = express();

//parses body requests to application/json
app.use(bodyParser.json());

//set headers for CORS

//set middleware for message routes
app.use(messagesRouter);

app.listen(8080);
