// Code CoordinatesButton Component Here
import React from 'react';



export default class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        const coXY = [e.clientX,e.clientY];
        this.props.onReceiveCoordinates(coXY);
    }
    render() {
        
        return (<div>
                    <button onClick={this.handleClick}>
                    Coordinate Button</button>
                </div>
            );
    }
}