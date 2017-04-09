const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var connection = mysql.createConnection({
    // properties ...
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b799d98b9bc760',
    password: 'cd46dbc2',
    database: 'heroku_0b3cb1d3de5250e'
});

connection.connect(function(error){
    if (!!error){
        console.log('connection error');
    } else{
        console.log('connected');
    }
});

router.get('/', function(req, res){

    // console.log('testing');

    // res.send('testing');

    connection.query("SELECT * FROM  contacts", function(error, rows, fields){
        if(!!error){
            console.log('query error');
        } else{
            // rows.map((e) => console.log(e.username));
            console.log('rows ' +rows);
            console.log('fields ' +fields);

            res.send({'contactList': rows})
        }
    });

});

module.exports = router;
