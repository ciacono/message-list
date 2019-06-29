const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating message schema & model

const MessageSchema = new Schema(
    {
    text: {
        type: String,
        required:[true, 'Text field required']
    }
    }
);

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;