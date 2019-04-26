var express = require('express')
var router = express.Router()

const mongoose = require('mongoose');
const Student = require('../models/student.modal');


// define the home page route
router.get('/', (req, res) => {
    //res.send('login please')
    let srecord = [];

    Student.find({}, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(docs);
            res.send(docs);
            //srecord.push(docs);
        }
    })
    //res.send(srecord);
});

module.exports = router;