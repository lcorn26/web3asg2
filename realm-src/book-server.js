require('dotenv').config();
const path = require('path');
const express = require('express');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const passport = require('passport');
const helper = require('./scripts/helpers.js');
require('./scripts/mongoDataConnector.js').connect();

// create an express app
const app = express();

// Express session
// app.use(cookieParser('oreos'));
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
require('./scripts/auth.js');

/* --- middle ware section --- */
// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

/*--- add in site page requests ----*/
app.get('/', helper.ensureAuthenticated, (req, res) => {
    res.render('home.ejs', { user: req.user });
});

app.get('/site/list', helper.ensureAuthenticated, (req, res) => {
    res.render('list.ejs', { books: controller.getAll() });
});

app.get('/site/book/:isbn', helper.ensureAuthenticated, (req, res) => {
    res.render('book.ejs', {
        book:
            controller.findByISBN10(req.params.isbn)
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

// serves up static files from the public folder. 
app.use('/static', express.static(path.join(__dirname, 'public')));

// tell node to use json and HTTP header features
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// controls book data access
const controller = require('./scripts/bookDataController.js');

// use the api route handlers
const apiRouter = require('./scripts/api-router.js');
apiRouter.handleAllBooks(app, controller);
apiRouter.handleISBN10(app, controller);
apiRouter.handleTitle(app, controller);


// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

const port = process.env.port;
app.listen(port, function () {
    console.log("Server running at port= " + port);
});
