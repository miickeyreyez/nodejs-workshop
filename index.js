import express from 'express';

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });

app.listen(3000, function () {
  console.log('Node app is running on port 3000');
});

module.exports = app;