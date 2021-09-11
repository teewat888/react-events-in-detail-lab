// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
    handleClick = (e) => {
        //console.log ('delay= ',this.props.delay);
       e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)}, this.props.delay);
    }
    render() {
        return (<div>
                    <button 
                        onClick={this.handleClick}
                        >Delayed Button
                    </button>
                </div>);
    }
}