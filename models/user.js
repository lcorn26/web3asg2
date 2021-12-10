const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
 id: Number,
 details: Object,
 picture: Object,
 membership: Object,
 email: String,
 password_bcrypt: String,
 apikey: String,
 favorites: Array
 });
 module.exports = mongoose.model('user', userSchema);