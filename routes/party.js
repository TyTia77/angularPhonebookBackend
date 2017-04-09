const express = require('express');
const mysql = require('mysql');
const router = express.Router();



router.get('/', function(req, res){

    res.send({
        type: 'post',
        name: 'test',
        rank: 'test1'
    })

});

module.exports = router;
