'use strict'
require('dotenv').config();
// create express app

// require express
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const helper = require('./scripts/helpers.js');

require('./scripts/dataConnector.js').connect();
require("./scripts/Auth.js");

//get our data model
const play = require('./models/Play.js');
const user = require('./models/User.js');

// tell node to use json and HTTP header features
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static('./static/'));

//use route handlers
const Router = require('./scripts/routes.js');
Router.handleAllPlays(app, play);
Router.handlePlayByID(app, play);
Router.handleUserByID(app, user);

//view engine setup
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(cookieParser("AndreIsDying"));
  app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

// handle requests for static resources from react's build folder
const publicPath = path.join(__dirname,'./build');
app.use(express.static(publicPath));

// you could add helper.ensureAuthenticated to this get
app.get('/', helper.ensureAuthenticated, (req,resp) => { 
    const filename = path.join(publicPath,'index.html');
    resp.sendFile(filename);
} ); 

app.get("/play-list", helper.ensureAuthenticated, (req, res) => {
    const filename = path.join(publicPath,'index.html');
    resp.sendFile(filename);
  });

// login and logout handlers
app.get("/login", (req, res) => {
    res.render("login.ejs", { message: req.flash("error") });
  });

app.post("/login", async (req, resp, next) => {
    passport.authenticate("localLogin", {
      successReturnToOrRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, resp, next);
  });
  
app.get("/logout", (req, resp) => {
    req.logout();
    req.flash("info", "You were logged out");
    resp.render("login", { message: req.flash("info") });
  });

app.get("/loggedInUser", helper.ensureAuthenticated, (req, res) => {
    user.find({ id: req.user.id }, "id", (err, data) => {
      if (err) {
        res.json({ message: "User not found" });
      } else {
        res.send(data);
      }
    });
  });

// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
    res.status(404).send("Sorry we cannot find that!")
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});