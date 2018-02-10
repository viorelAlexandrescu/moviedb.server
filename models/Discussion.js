const mongoose = require('mongoose');

const discussionSchema = mongoose.Schema({
    subject: string,
    comments: []
});
const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
