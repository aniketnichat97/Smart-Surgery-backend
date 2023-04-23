const express = require("express");
const config = require('config')
const app = express();
const host = config.get("server.host");
const port = config.get("server.port");
const cors = require("cors");

const {check, validationResult} = require('express-validator');
const bodyParser = require('body-parser');
var corsOptions = {
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
  };


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get('/',(req,res) =>
res.send(` Node server is running on ${port}`));

require("./src/routes/users.route.js")(app);
require("./src/routes/test.route.js")(app);
require("./src/routes/medicines.route.js")(app);
require("./src/routes/patientrecord.route.js")(app);


// require("./src/routes/users.js")(app);

app.listen(port, () => 
console.log(`Example app liseting on port ${port}!`),
);

