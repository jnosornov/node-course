const http = require('http');
const express = require('express');

const app = express();
app.use((req, res, next) => {
  console.log("In the middlewear!");
  next(); // allows the request to continue to next middlewear in line
});

app.use((req, res, next) => {
  console.log("In another middlewear!");
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);