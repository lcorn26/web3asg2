const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
 id: Number,
 details: {
 firstname: String,
 lastname: String,
 city: String,
 country: String
 },
 picture: {
 large: String,
 thumbnail: String
 },
 membership: {
 date_joined: String,
 last_update: String,
 likes: Number
 },
 email: String,
 password: String,
 apikey: String
 });
 module.exports = mongoose.model('User', userSchema, 'users');

