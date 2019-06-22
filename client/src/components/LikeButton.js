import React from 'react';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function(prev) {
            return {toggleOn: !prev.toggleOn};
        });
    }

    render() {
        return (
            <div>
                <button className={'likeButton'} onClick={this.handleClick}>
                    <FontAwesomeIcon className={'likeButtonIcon'} icon={this.state.toggleOn ? faThumbsUp : faThumbsDown}/>
                </button>
            </div>
        )
    }
}

export default LikeButton;