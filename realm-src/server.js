'use strict'
require('dotenv').config();
// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// create express app
const  app = express();

// define port to run express app
const  port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


const play = require('../models/play');
const user = require('../models/user');

const imageRouter = require('../config/api-routes.js');
imageRouter.handlelist(app,play);
imageRouter.handleplay(app,play);
imageRouter.handleUser(app,user);
// create connection to database
require('../config/dataConnector.js').connect();

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});




// use the route handlers
