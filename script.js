const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

// allows cross url api request
app.use(cors())

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
app.use('/party', require('./routes/party'));

app.listen(port, function(){
    console.log('now listening');
});
