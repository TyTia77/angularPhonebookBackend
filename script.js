const express = require('express');
const app = express();


// app.use(bodyParser.json());

// set port
var port = process.env.PORT || 5000;
app.use(express.static(__dirname));

app.use('/users', require('./routes/users'));
app.use('/party', require('./routes/party'));

app.listen(port, function(){
    console.log('now listening');
});
