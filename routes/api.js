const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

//initial messages:
var coolFunState = [{id: uuidv4(), text: 'Messages are great!'},
        {id: uuidv4(), text: 'What is your favorite dog breed?'},
        {id: uuidv4(), text: 'Water is wet.'}];

//getting the list of messages
router.get('/messages', function(req, res){
    res.json(coolFunState);
    console.log('GET request', req.body);
});

//adding a new message -> input task attached to req.body
router.post('/messages', function(req, res){
    console.log(JSON.stringify(req.body));
    coolFunState.push(req.body); //adding task to messages state array
    res.json(req.body);
    console.log('POST request', req.body);
});

//deleting list of messages
router.delete('/messages', function(req, res){
    coolFunState = [];
    console.log('DELETE request');
    res.json(coolFunState);
});

module.exports = router;


