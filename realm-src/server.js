'use strict'
require('dotenv').config();
// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const passport = require('passport');
//const helper = require('./scripts/helpers.js');
// create express app
const app = express();

//the names of the fields in your database

app.use(cookieParser('oreos'));
app.use(
 session({
 secret: process.env.SECRET,
 resave: true,
 saveUninitialized: true
 })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// use express flash, which will be used for passing messages
app.use(flash())

// set up the passport authentication
require('../scripts/auth.js');


// define port to run express app
const port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


const play = require('../models/play');
const user = require('../models/user');

const Router = require('../config/api-routes.js');
Router.handlelist(app, play);
Router.handleplay(app, play);
Router.handleUser(app, user);
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
