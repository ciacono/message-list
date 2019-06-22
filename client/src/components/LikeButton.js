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
                <button onClick={this.handleClick}>
                    <FontAwesomeIcon icon={this.state.toggleOn ? faThumbsUp : faThumbsDown}/>
                    {/*{this.state.toggleOn ? 'Like' : 'Unlike'}*/}
                </button>
            </div>
        )
    }
}

export default LikeButton;