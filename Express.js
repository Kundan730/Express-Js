const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req);
  // res.send('Hello World!');
  res.send('<h1>Hello World!</h1>')
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: espkundan@gmail.com')
});

app.get('/about', (req, res) => {
  res.send('I am Flash')
});

app.get('/api', (req, res) => {
  res.send('Flash API')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});