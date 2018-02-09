import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: string,
    surname: string,
    email: string,
    password: string,
    accessToken: string,
    isAdmin: boolean
});

export const User = mongoose.model('User', userSchema);
