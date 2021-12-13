'use strict'
require('dotenv').config();
// require express and bodyParser
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const helper = require('./scripts/helpers.js');
const controller = require('./scripts/dataController.js');

require('./scripts/dataConnector.js').connect();
// create express app
const app = express();

// tell node to use json and HTTP header features
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://web3asg2-334906.uc.r.appspot.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/* --- middle ware section --- */
// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

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
   require('./scripts/Auth.js');

   const play = require('./models/play');
   const user = require('./models/user');

   const Router = require('./scripts/api-routes.js');
   Router.handleAll(app, controller);
   // create connection to database


/*--- add in site page requests ----*/
app.get('/', helper.ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
    app.use(express.static(path.join(__dirname, './build')));
});

app.get('/api/list', helper.ensureAuthenticated, (req, res) => {
    res.render('list.ejs', { plays: controller.getAll() });
});

// app.get('/api/play/:id', helper.ensureAuthenticated, (req, res) => {
//     res.render('play.ejs', {
//         play:
//             controller.findPlay(req.params.id)
//     });
// });

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

// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));