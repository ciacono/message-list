import React from 'react'
import Message from './Message'
import { getMessages } from '../actions'
import {applyMiddleware as dispatch} from "redux";
import { connect } from 'react-redux'

class MessageList extends React.Component {
    //TODO: initial messages not loading! react app working tho
    componentDidMount() {
        fetch('http://localhost:4000/api/messages')
            .then(res => res.json())
            .then(messages => getMessages(messages));
    }

    render() {
        return (
            <ul>
                {this.props.messages && this.props.messages.map(message =>
                    <Message
                        key={message.id}
                        {...message}
                    />
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messages.messages
});

export default connect(mapStateToProps, { getMessages })(MessageList);