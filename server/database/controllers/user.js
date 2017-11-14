const User = require('../models/user');

function createUser(User) {
    User.save(function(err) {
        if (err) throw err;
      
        console.log(User, 'created!');
      });
}

function getUsers() {
    User.find({}, function(err, users) {
        if (err) throw err;
      
        // object of all the users
        console.log(users);
      });
}


module.exports = {
    create: createUser,
    getAllUsers: getUsers
}