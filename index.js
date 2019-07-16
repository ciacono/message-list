const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.port || 4000;
require('dotenv').config();

const path = require('path');

app.use(bodyParser.json());
app.use(cors());
//using route at localhost:4000/api/messages
app.use('/api', routes);
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "client", "build")));

//connecting to mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/messagesdb');
mongoose.Promise = global.Promise;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//port that app listens to for requests
app.listen(port, function(){
    console.log('now listening for requests');
});
