const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    releaseDate: Date,
    description: String
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
