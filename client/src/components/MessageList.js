import React from 'react'
import Message from './Message'
import {getMessages} from '../actions'
import ClearButton from "./ClearButton";
import { connect } from "react-redux";

class MessageList extends React.Component {
    async componentDidMount() {
        try {
            let response = await fetch('http://localhost:4000/api/messages', {
                method: 'GET'
            });

            let data = await response.json();
            console.log(data);
            this.props.getMessages(data);
        } catch(e) {
            console.log(e.message);
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.messages && this.props.messages.map(message =>
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

const mapStateToProps = state => ({
    messages: state.messages
});

export default connect(mapStateToProps, {getMessages})(MessageList)