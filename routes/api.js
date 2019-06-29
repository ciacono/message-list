const express = require('express');
const router = express.Router();
const Message = require('../models/message');

//getting the list of messages
router.get('/messages', function(req, res){
    Message.find({}).then(function(messages){
        res.send(messages);
    });
    console.log('GET request');
});

//adding a new message -> input task attached to req.body
router.post('/messages', function(req, res){
    Message.create(req.body).then(function(message){
        res.json(message);
    }).catch(error => {console.log('caught', error.message);
    });
    console.log('POST request', req.body);
});

//deleting list of messages
router.delete('/messages', function(req, res){
    Message.deleteMany().then(function(messages){
        res.send(messages);
    }).catch(error => {console.log('caught', error.message)});
    console.log('DELETE request');
});

module.exports = router;


