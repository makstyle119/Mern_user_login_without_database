const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const LoginRoute = require('./routes/login');
const StudentRoute = require('./routes/student');

const app = express();
const port = 5000

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/mernschool');


app.use('/', LoginRoute);
app.use('/students', StudentRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))