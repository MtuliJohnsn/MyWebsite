const express = require('express');
const app = express();

// Define a route handler for the contact page
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// Define a route handler for the home page
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

// Define a route handler for the resume page
app.get('/CV', (req, res) => {
  res.sendFile(__dirname + '/CV.html');
});

// Define a route handler for the work page
app.get('/work', (req, res) => {
  res.sendFile(__dirname + '/work.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
