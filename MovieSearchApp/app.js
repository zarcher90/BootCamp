const express = require('express');

const app = express();

const request = require('request');

app.set('view engine', 'ejs');

app.get('/results', (req, res) => {
  const searchKey = req.query.s;
  request(`http://www.omdbapi.com/?apikey=thewdb&s=${searchKey}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.render('results', { data });
    }
  });
});

app.get('/', (req, res) => {
  res.render('search');
});

app.listen(3000, 'localhost', () => {
  console.log('Movie App is started!');
});
