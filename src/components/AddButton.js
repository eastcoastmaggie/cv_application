import React, { Component } from 'react';

class AddButton extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick = (parameter) => {
       this.props.onButtonClick(parameter)
    }
    render(){
        return (
            <>
                <button onClick={() =>{this.handleClick(this.props.parameter)}}>{this.props.label}</button>
            </>
        );
    }
}
export default AddButton;