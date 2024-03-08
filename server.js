const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Parse Application / Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Call Routes
var routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log(`Server Started on Port 3000`);
});
