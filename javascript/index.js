"use strict";

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.originalUrl}`);
  next();
});

app.get('/hello-world', (req, res) => {
  const message = { "msg": "Hello, World!" };
  res.json(message);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080!');
});
