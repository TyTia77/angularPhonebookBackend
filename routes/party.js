const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const fs = require('fs');
const data = fs.readFileSync('files/test.json');
const dataJson = JSON.parse(data);
const data1 = data.toString();



router.get('/', function(req, res){

    res.send({
        type: 'post',
        name: 'test',
        rank: 'test1',
        data: dataJson
    })

});

module.exports = router;
