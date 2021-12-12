'use strict'
require('dotenv').config();
// require express and bodyParser
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const helper = require('../scripts/helpers.js');
const controller = require('../config/api-routes.js');

require('../config/dataConnector.js').connect();
// create express app
const app = express();


/* --- middle ware section --- */
// view engine setup
app.set('views', '../views');
app.set('view engine', 'ejs');

// serves up static files from the public folder. 
app.use('/static', express.static(path.join(__dirname, '../public')));

// tell node to use json and HTTP header features
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
   require('../scripts/Auth.js');



/*--- add in site page requests ----*/
app.get('/', helper.ensureAuthenticated, (req, res) => {
    res.render('home.ejs', { user: req.user });
});

app.get('/api/list', helper.ensureAuthenticated, (req, res) => {
    res.render('list.ejs', { play: controller.handlelist() });
});

app.get('/api/play/:id', helper.ensureAuthenticated, (req, res) => {
    res.render('play.ejs', {
        play:
            controller.findPlay(req.params.id)
    });
});

// login and logout handlers
app.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('error') });
});
app.post('/login', async (req, resp, next) => {
    // use passport authentication to see if valid login
    passport.authenticate('localLogin',
        {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })(req, resp, next);
});
app.get('/logout', (req, resp) => {
    req.logout();
    req.flash('info', 'You were logged out');
    resp.render('login', { message: req.flash('info') });
});

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

// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

const port = process.env.port;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});



