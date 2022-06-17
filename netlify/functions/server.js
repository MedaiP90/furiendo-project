const express = require('express');
const serverless = require('serverless-http');
const apiFuriendo = require('../../api/furiendo');
const fakeDb = require('../../tools/fake-db');

/* Configure Express */

let app = express();

app.use(express.json({ limit: '15mb', extended: true }));

/* Configure routing */

// Default ping response
app.get('/api/ping', (_req, res) => { res.send('pong'); });

// Add api responders
apiFuriendo.add(app, fakeDb, '/api');

module.exports = app;
module.exports.handler = serverless(app);
