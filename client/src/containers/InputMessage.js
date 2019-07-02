import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

const InputMessage = ({ dispatch }) => {
    let input;

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return
        }

        try {
            let response = await fetch('http://localhost:4000/api/messages', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: input.value})
            });

            let data = await response.json();
            dispatch(addMessage(data));
            input.value = '';

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div style={style}>
            <form onSubmit={handleAdd}>
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

export default connect(
    )(InputMessage)