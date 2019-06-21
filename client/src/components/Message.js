import React from 'react'
import {connect} from 'react-redux';
import LikeButton from './LikeButton'
import ZoomButton from './ZoomButton'

const Message = ({ text, onClick}) => (
    <li
    onClick = {onClick}
    >
        <div style={style}>
            <div>{text}</div>
            <LikeButton />
        </div>
        <ZoomButton message={text}/>
    </li>
);

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};


export default connect()(Message)