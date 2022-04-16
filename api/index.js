const express = require('express');
const apiFuriendo = require('./furiendo');
const fakeDb = require('../tools/fake-db');

/* Configure variables */

const port = process.env.LISTENING_PORT || 443;

/* Configure Express */

let app = express();

app.use(express.static('app'));
app.use(express.json({ limit: '15mb', extended: true }));

// Run the server
let server = app.listen(port, () => {
  console.log('Server is running on port', server.address().port);
});

/* Configure routing */

// Default ping response
app.get('/api/ping', (_req, res) => { res.send('pong'); });

// Add api responders
apiFuriendo.add(app, fakeDb, '/api');

module.exports = app;
