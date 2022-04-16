const express = require('express');
const http = require('http');
const apiFuriendo = require('./api/furiendo');
const fakeDb = require('./tools/fake-db');

/* Configure variables */

const port = process.env.LISTENING_PORT || 3000;

/* Configure Express */

let app = express();

app.use(express.static('app'));
app.use(express.json({ limit: '15mb', extended: true }));
app.set('port', port);

/* Configure routing */

// Default ping response
app.get('/api/ping', (_req, res) => { res.send('pong'); });

// Add api responders
apiFuriendo.add(app, fakeDb, '/api');

/* Create HTTP server */

const server = http.createServer(app);

server.listen(port);
