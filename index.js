const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());
//using route at localhost:4000/api/messages
app.use('/api', routes);
app.use(express.static(__dirname));

//connecting to mongo
mongoose.connect('mongodb://localhost/messagesdb');
mongoose.Promise = global.Promise;

//port that app listens to for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});
