const express = require('express');
const RegisterController = require('./controllers/register');
const AuthController = require('./controllers/authentifcation');
const config = require('./config');
const Movie = require('./models/Movie');
const apiRoutes = express.Router(); 

// route to show a message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'API Works' });
});

apiRoutes.get('/movies', (req, res) => {
    Movie.find((err, movies) => {
        if (err) return console.error(err);
        res.json({
            movies: movies
        });
      });
});

apiRoutes.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    Movie.findById(movieId, (err, movies) => {
        if (err) return console.error(err);
        res.json({
            movie: movies[0]
        });
      });
});

apiRoutes.post('/movies', (req, res) => {
    const newMovie = req.body.movie;
    Movie.save((err, movie) => {
        if(err) return console.error(err);
        console.log(movie, 'has been added');
    })
});

apiRoutes.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    Movie.remove({_id: movieId}, (err, movie) => {
        if (err) return console.error(err);
        Movie.findById(movieId, (err, movie) => {
            if(movie == null)
                console.log('movie has been removed');
          })
      });
});

// authenticate
// apiRoutes.post(config.routes[1], (req, res) => {
//     // AuthController.authenticate(req.body.credentials, (result) => {
//     //     let response = {
//     //         success: true,
//     //         message: 'Token is served'
//     //     };

//     //     if (result != null) {
//     //         // all good
//     //         res.status = 200;
//     //         response.token = result;
//     //     } else {
//     //         // bad auth
//     //         res.status = 401;
//     //         response.success = false;
//     //         response.message = 'fuck off';
//     //     }
//     //     res.json(response);
//     // });
// });

// // register
// apiRoutes.post(config.routes[2], (req, res) => {
//     RegisterController.register(req.body.info, (result) => {
//         throw Error('Register method not implemented');
//     });
// });



// TODO: route middleware to verify a token
module.exports = apiRoutes;
