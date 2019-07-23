import express from 'express';
import dotenv from 'dotenv';
import '@babel/polyfill';
import log from './logger';
import db from './db';

// Load dotenv
dotenv.config();

const app = express();
const bodyParser = require('body-parser');

const {
  PORT,
} = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send({ error: true, message: 'hello' }));

app.listen(PORT, () => {
  // Connect to database
  db();
  log(`Node app is running on port ${PORT}`);
});

module.exports = app;
