import React, { Component } from 'react';

/*---------------DISLAYS THE OUTPUT BY RECEIVING STATE----------------*/
class Output extends Component {
    render() {
        const {textDisplay}=this.props
        return (
            <div>
                <p className="echo">You are saying:</p>
                <p>{textDisplay}</p>
            </div>
        );
    }
}

export default Output;