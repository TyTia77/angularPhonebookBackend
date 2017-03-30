const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var connection = mysql.createConnection({
    // properties ...
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angular'
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

    connection.query("SELECT * FROM  users", function(error, rows, fields){
        if(!!error){
            console.log('query error');
        } else{
            rows.map((e) => console.log(e.username));
            console.log('rows ' +rows);
            console.log('fields ' +fields);

            res.send({'rows': rows, 'fields': fields})
        }
    });

});

module.exports = router;
