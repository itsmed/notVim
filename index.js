'use strict';

const express = require('express');
const path = require('path');

const fs = require('fs');
const Promise = require('Promise');


const app = express();


// app.get('*', function(req, res, next) {

//   // res.write;

//   next();

// }).

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(3000, function() {
  console.log('app listening on port 3000');
});