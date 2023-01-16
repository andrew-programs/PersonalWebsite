const express = require("express");
const app = express();

app.use('/public', express.static('public'));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + '/views/resume.html');
});

app.get('/demos', (req, res) => {
  res.sendFile(__dirname + '/views/demos.html');
});

app.get('/the-lab', (req, res) => {
  res.sendFile(__dirname + '/views/the-lab.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/views/contact-me.html');
});

app.listen(3000, () => {
  console.log('Server is running on localhost 3000');
});

module.exports = app;