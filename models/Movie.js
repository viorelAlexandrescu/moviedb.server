import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: string,
    releaseDate: Date,
    description: string
});

export const Movie = mongoose.model('Movie', movieSchema);
