import React from 'react';

class ZoomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showComponent: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            showComponent: (!this.state.showComponent)
        });
    }

    render() {
        return (
            <div style={divStyle}>
                <button onClick={this.handleClick}>
                    Zoom
                </button>
                {this.state.showComponent ?
                    <p style ={style}>{this.props.message}</p>
                    : null
                }
            </div>
        );
    }

}

const divStyle = {
    padding: '1px',
    margin: '5px'
};

const style = {
    background: '#535B60',
    color: '#EDF2F2',
    width: '95%',
    padding: '1%',
    margin: '5px',
    marginTop: '10px',
    textItems: 'center',
    fontSize: '24px'
};

export default ZoomButton