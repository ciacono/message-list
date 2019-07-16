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
app.use('/api', routes);
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/messagesdb');
mongoose.Promise = global.Promise;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "server.js.html"));
});

app.listen(port, function(){
    console.log('now listening for requests');
});
