const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
//const cors = require('cors');

app.use(bodyParser.json());
//app.use(cors());
//using route at localhost:4000/api/messages
app.use('/api', routes);
app.use(express.static(__dirname));

//port that app listens to for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});
