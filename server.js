const express = require('express');
const app = express();

app.use('/store', function(req, res, next) {
  console.log('Hey, im a middleware! :)');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/store', function(req, res) {
  res.send('This is market');
});

app.listen(3000);

app.use(function (req, res, next) {
  res.status(404).send('Sorry, not found');
});