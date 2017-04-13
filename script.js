/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');
const app = express();

const options = {
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
};

// allows cross diff port api request
app.use(cors());

// set port
var port = process.env.PORT || 5000;
// app.use(express.static(__dirname));

// allows data in body
app.use(bodyParser.json());

// to support URL-encoded bodies such as objects and array
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
app.use('/contacts', require('./routes/contacts'));

// https.createServer(options, app).listen(port, () => console.log('now listening'));
http.createServer(app).listen(port, () => console.log('now listening'));

// app.listen(5000, function(){
//     console.log('now listening');
// });
