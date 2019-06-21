import React from 'react';
import {applyMiddleware as dispatch} from "redux";
import {deleteMessages} from "../actions";
import { connect }from 'react-redux';

class ClearButton extends React.Component {
    //TODO: MAKE IT WORK
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch('http://localhost:4000/api/messages', {
            method: 'DELETE'
        }).then(res => res.json())
            .then(dispatch(deleteMessages(this.props.messages)))
    }

    render() {
        return (
            <button className={'clearButton'} onClick={this.handleClick}>
                Clear messages
            </button>
            )
    }
}

const mapStateToProps = state => ({
    messages: state.messages
});

export default connect(mapStateToProps,)(ClearButton)