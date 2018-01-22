import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import config from './config';
import routes from './routes';
const app = express();

//Set Port
const port = process.env.PORT || '895';
app.set('port', port);

// TODO add db connection call
app.set(config.secretKey, config.secretValue);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
// Send all other requests to the Angular app
app.get('/webapp', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// set routes handler
app.use('/api', routes);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));