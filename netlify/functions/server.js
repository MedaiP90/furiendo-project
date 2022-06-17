const express = require('express');
const serverless = require('serverless-http');
const apiFuriendo = require('../../api/furiendo');
const fakeDb = require('../../tools/fake-db');

/* Configure Express */

const app = express();
const router = express.Router();

app.use(express.json({ limit: '15mb', extended: true }));

/* Configure routing */

// Default ping response
router.get('/ping', (_req, res) => { res.send('pong'); });

// Add api responders
apiFuriendo.add(router, fakeDb, '/');

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
