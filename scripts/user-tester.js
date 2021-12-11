require('dotenv').config();
const express = require('express');
const connector =
 require('../config/DataConnector.js').connect();

const UserModel = require('./scripts/User.js');
UserModel.findOne({ email: "zpochet2@apple.com" }, (err, data) =>
{
 if (err) {
 console.log('user not found');
 } else {
 console.log('-- User found ---');
 console.log(data);
 }
}); 