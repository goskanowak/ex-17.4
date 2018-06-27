const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function(req, res, next) {
  console.log('Hey, im a middleware! :)');
  next();
});

app.get('/', function(req, res) {
  res.render('content');
});

app.get('/log', function(req, res) {
  res.render('log');
});

app.listen(3000);

app.use(function (req, res, next) {
  res.status(404).send('Sorry, not found');
});