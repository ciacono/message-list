const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

//initial messages:
const messages = [{id: uuidv4(), text: 'Messages are great!'},
        {id: uuidv4(), text: 'What is your favorite dog breed?'},
        {id: uuidv4(), text: 'Water is wet.'}];

//getting the list of messages
router.get('/messages', function(req, res){
    res.json(messages);
    console.log('GET request', req.body);
});

//adding a new message -> input task attached to req.body
router.post('/messages', function(req, res){
    messages.push(req.body); //adding task to messages state array
    console.log('POST request', req.body);
});

// //deleting list of messages
// router.delete('/messages', function(req, res){
//     messages.length = 0;
//     res.json(messages);
//     console.log('DELETE request', req.body);
// });

// //update message?
// router.put('/messages/:id', function(req, res){
//     res.send({type:'PUT'}) //sending back response type
// });

module.exports = router;


