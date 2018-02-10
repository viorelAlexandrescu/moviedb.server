const mongoose = require('mongoose');

const discussionSchema = mongoose.Schema({
    subject: String,
    comments: []
}, {
    usePushEach: true
  });
const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
