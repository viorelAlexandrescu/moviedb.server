const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    username: String,
    movieId: String,
    review: String,
    rating: Number
});
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
