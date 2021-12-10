const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const playSchema = new mongoose.Schema({
 id: String,
 filename: String,
 title: String,
 likelyDate: String,
 genre: String,
 wiki: String,
 gutenberg: String,
 shakespeareOrg: String,
 synopsis: String,
 desc: String,
 playText: Object
 });
 module.exports = mongoose.model('play', playSchema);