import express from 'express';

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send({ error: true, message: 'hello' }));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Node app is running on port 3000');
});

module.exports = app;
