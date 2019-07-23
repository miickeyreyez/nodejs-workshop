import express from 'express';
import log from './logger';

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send({ error: true, message: 'hello' }));

app.listen(3000, () => {
  log('Node app is running on port 3000');
});

module.exports = app;
