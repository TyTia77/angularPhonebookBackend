const express = require('express');
const app = express();


// app.use(bodyParser.json());

app.use('/users', require('./routes/users'));
app.use('/party', require('./routes/party'));



app.listen(5000, function(){
    console.log('now listening');
});
