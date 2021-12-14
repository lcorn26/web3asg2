const helper = require('../scripts/helpers.js');
const passport = require("passport");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");

const passInit = (app) => {
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
};

//get user by id
handleUserByID = (app, user) => {
  passInit(app);
  app.get("/api/user/:id", helper.ensureAuthenticated, (req, resp) => {
    user.find(
      { id: req.params.id },
      "id details picture membership email",
      (err, data) => {
        if (data) {
          resp.json(data);
        } else {
          resp.json({ message: "User not found" });
        }
      }
    );
  });
};

//return all plays
const handleAllPlays = (app, play) => {
  passInit(app);
  app.get("/api/list", helper.ensureAuthenticated, (req, resp) => {
    play.find({}, (err, data) => {
      if (err) {
        resp.json({ message: "Unable to connect to plays" });
      } else {
        console.log("called the list of all plays");
        resp.json(data);
      }
    });
  });
};

//get play by id
handlePlayByID = (app, play) => {
  passInit(app);
  app.get("/api/play/:id", helper.ensureAuthenticated, (req, resp) => {
    play.find({ id: req.params.id }, (err, data) => {
      if (err) {
        console.log("play not found");
        resp.json({ message: "Play not found :(" });
      } else {
        console.log("called play");
        resp.json(data);
      }
    });
  });
};

module.exports = {
  handleAllPlays,
  handlePlayByID,
  handleUserByID,
};
