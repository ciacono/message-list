import React from 'react'
import Message from './Message'
import {getMessages} from '../actions'
import {applyMiddleware as dispatch} from "redux";
import ClearButton from "./ClearButton";

class MessageList extends React.Component {
    //TODO: initial messages not loading! but they work when added via addMessage?
    componentDidMount() {
        fetch('http://localhost:4000/api/messages')
            .then(res => res.json())
            .then(dispatch(getMessages(this.props.messages)));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.messages.map(message =>
                        <Message
                            key={message.id}
                            {...message}
                        />
                    )}
                </ul>
                <ClearButton />
            </div>
        )
    }
}

export default MessageList