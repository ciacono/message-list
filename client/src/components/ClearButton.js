import React from 'react';
import { deleteMessages } from "../actions";
import { connect }from 'react-redux';

class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch('https://aqueous-lowlands-86563.herokuapp.com/api/messages', {
            method: 'DELETE',
        }).then(res => this.props.deleteMessages(res))
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

export default connect(mapStateToProps,{ deleteMessages })(ClearButton)