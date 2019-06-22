import React from 'react'
import {connect} from 'react-redux';
import LikeButton from './LikeButton'
import ZoomButton from './ZoomButton'
import styled, {keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';

const swingAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`animation: 2s ${swingAnimation};`;

const Message = ({ text, onClick}) => (
    <FadeInDiv>
        <li
            onClick = {onClick}
        >
            <div style={style}>
                <div>{text}</div>
                <LikeButton />
            </div>
            <ZoomButton message={text}/>
        </li>
    </FadeInDiv>
);

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

export default connect()(Message)