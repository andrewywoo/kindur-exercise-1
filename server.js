//server.js
const app = require("./app");

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
