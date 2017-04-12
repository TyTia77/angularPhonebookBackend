const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// post create
// get read
// put update
// delete delete

// var connection = mysql.createConnection({
//     // properties ...
//     host: 'us-cdbr-iron-east-03.cleardb.net',
//     user: 'b799d98b9bc760',
//     password: 'cd46dbc2',
//     database: 'heroku_0b3cb1d3de5250e'
// });

var connection = mysql.createConnection({
    // properties ...
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phonebook'
});

connection.connect(error => {
    if (!!error){
        console.log('connection error');
    } else{
        console.log('connected');
    }
});

router.get('/', (req, res) => {

    connection.query("SELECT * FROM  contacts", (error, rows, fields) => {
        if(!!error){
            console.log('query error');
        } else{
            // rows.map((e) => console.log(e.username));
            // console.log('rows ' +rows);
            // console.log('fields ' +fields);
            res.send({'contactList': rows})
        }
    });

});

router.delete('/:id', (req, res) => {
    connection.query("DELETE from contacts WHERE id = ?", req.params.id, (err, results) => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log('successfully deleted');
            res.send('successfully deleted');
        }
    })

});

router.put('/:id', (req, res) => {
    connection.query("UPDATE contacts SET ? Where id = ?", [req.body, req.params.id], (err, results) => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log('successfully updated');
            res.send('successfully updated');
        }
    })
})

router.post('/', (req, res) => {
    connection.query("INSERT INTO contacts set ?", req.body , (err, results) => {
        if(err){
            console.log(err);
            return;
        } else{
            console.log('successfully added');
            res.send('successfully added');
        }
    });


    // connection.end(function(){
    //     console.log('connection closed');
    // })
});

module.exports = router;
