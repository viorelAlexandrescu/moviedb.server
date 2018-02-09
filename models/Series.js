import mongoose from 'mongoose';

const serieschema = mongoose.Schema({
    title: string,
    releaseDate: Date,
    description: string
});

export const Movie = mongoose.model('Series', seriesSchema);
