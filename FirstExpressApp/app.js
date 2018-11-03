const express = require('express');

const app = express();


// "/" => "Hi There!"
app.get('/', (req, res) => {
  res.send('Hi There!');
});

// "/bye" => "Goodbye!"
app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

// "/dog" => "MEOW!"
app.get('/dog', (req, res) => {
  res.send('MEOW!!!');
});

// parameters variables
app.get('/r/:subpageName', (req, res) => {
  res.send(`Welcome to the ${req.params.subpageName} page`);
});

// more parameters variables
app.get('/r/:subpageName/document/:id/comments', (req, res) => {
  res.send(`Welcome to the comments page of the ${req.params.subpageName} page with id of ${req.params.id}`);
});

// Catch All
app.get('/*', (req, res) => {
  res.send('404 page not found');
});

app.listen('3000', 'localhost', () => {
  console.log('SERVER IS UP');
});
