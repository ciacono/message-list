import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import uuid from 'uuid';

const InputMessage = ({ dispatch }) => {
    let input;
    let newId = uuid.v4();

    return (
        <div style={style}>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                //TODO post request is being called, but empty message being added to server...
                //BUT it is showing up in react app?
                fetch('http://localhost:4000/api/messages', {
                    method: 'POST',
                    body: JSON.stringify({id: newId, text: input.value})
                }).then(res => res.json())
                    .then(dispatch(addMessage({id: newId, text: input.value})));
                input.value = ''
            }}>
                <input  style={inStyle} ref={node => input = node} />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
};

const inStyle = {
    width: '80%'
};

const style = {
    justifyContent: 'center',
    margin: '0px auto',
    width: '100%'
};

export default connect()(InputMessage)