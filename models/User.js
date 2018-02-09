const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: string,
    username: string,
    password: string,
    role: string
});

module.exports = {
    User: mongoose.model('User', userSchema)
}
