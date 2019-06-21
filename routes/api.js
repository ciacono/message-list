const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

//initial messages:
const coolFunState = [{id: uuidv4(), text: 'Messages are great!'},
        {id: uuidv4(), text: 'What is your favorite dog breed?'},
        {id: uuidv4(), text: 'Water is wet.'}];

//getting the list of messages
router.get('/messages', function(req, res){
    res.json(coolFunState);
    console.log('GET request', req.body, coolFunState);
});

//adding a new message -> input task attached to req.body
router.post('/messages', function(req, res){
    coolFunState.push(req.body); //adding task to messages state array
    console.log('POST request', req.body, coolFunState);
});

//deleting list of messages
//TODO: handling delete here, not in reducer
//TODO DELETE NOT WORKING!!!
router.delete('/messages', function(req, res){
    coolFunState.length = 0;
    res.json(coolFunState);
    console.log('DELETE request', coolFunState);
});

// //update message?
// router.put('/messages/:id', function(req, res){
//     res.send({type:'PUT'}) //sending back response type
// });

module.exports = router;


