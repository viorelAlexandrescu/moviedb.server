import express from 'express';
import RegisterController from './controllers/register';
import AuthController from './controllers/authentifcation';
import config from './config';
const apiRoutes = express.Router(); 

// route to show a message (GET http://localhost:8080/api/)
apiRoutes.get(config.routes[0], function(req, res) {
    res.json({ message: 'API Works' });
});

// authenticate
apiRoutes.post(config.routes[1], (req, res) => {
    AuthController.authenticate(req.body.credentials, (result) => {
        let response = {
            success: true,
            message: 'Token is served'
        };

        if (result != null) {
            // all good
            res.status = 200;
            response.token = result;
        } else {
            // bad auth
            res.status = 401;
            response.success = false;
            response.message = 'fuck off';
        }
        res.json(response);
    });
});

// register
apiRoutes.post(config.routes[2], (req, res) => {
    RegisterController.register(req.body.info, (result) => {
        throw Error('Register method not implemented');
    });
});

// TODO: route middleware to verify a token
export const routes = apiRoutes;