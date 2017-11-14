// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  surname: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: Boolean,
  creationDate: Date,
  lastUpdate: Date
});

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;