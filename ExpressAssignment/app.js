const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
  const { animal } = req.params;

  const sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof',
  };
  res.send(`The ${animal} says '${sounds[animal.toLowerCase()]}'`);
});

app.get('/repeat/:phrase/:times', (req, res) => {
  let print = '';
  for (let i = 0; i < req.params.times; i++) {
    print += `${req.params.phrase} `;
  }
  res.send(print);
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found.... What are you doing with your life?');
});

app.listen(3000, 'localhost', () => {
  console.log('SERVER STARTED!');
});
