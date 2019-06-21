import React from 'react';

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
                    {this.state.toggleOn ? 'Like' : 'Unlike'}
                </button>
            </div>
        )
    }
}

export default LikeButton;