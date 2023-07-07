import React, { Component } from 'react';
import { useState } from 'react';
import AddButton from './AddButton';

class EditableElements extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.setInputType = this.setInputType.bind(this);

        this.state = {
            editableLabel: this.props.textInner
        }; 
    }

    handleEnter = (e) => {
        let key = e.key;
        if (key === "Enter" || key === "Tab" || e.currentTarget !== document.activeElement) {
            let sibling = e.currentTarget.parentNode.firstElementChild;
            while (sibling){
                if (sibling === e.currentTarget){
                    sibling.classList.add('hide');
                } else if (sibling.attributes.id !== undefined && sibling.attributes.id.value === e.currentTarget.attributes.name.value){
                    sibling.classList.remove("hide");
                }
                sibling = sibling.nextElementSibling;
            }
            
        }
    }
    handleClick = (e) => {
        if (this.props.readOnly() !== true){
        e.currentTarget.classList.add('hide');
        let sibling = e.currentTarget.parentNode.firstElementChild;
        while (sibling){
            if (sibling.attributes.name !== undefined && sibling.attributes.name.value === e.currentTarget.attributes.id.value){
                sibling.classList.remove('hide');
                sibling.focus();
            } else  if (sibling === e.currentTarget){
                sibling.classList.add('hide');
            }
            sibling = sibling.nextElementSibling;
        }
    }
    }
    handleChange = (e) => {
        this.setState({
            editableLabel: e.target.value
        });    
    }
    setInputType = (e) => {
        if (this.props.inputType === 'text'){
            return  <><input type='text' onChange={this.handleChange} onKeyDown={this.handleEnter} onBlur={this.handleEnter}
            className='hide' name={this.props.eleId} defaultValue={this.editableLabel}></input></>
        } else if (this.props.inputType === 'textarea'){
            return <><textarea name={this.props.eleId} onChange={this.handleChange} onKeyDown={this.handleEnter} onBlur={this.handleEnter}
            className='hide' rows="5" cols="33">{this.editableLabel}</textarea></>
        } else if (this.props.inputType === 'text-list'){
            return <><input type='text' onChange={this.handleChange} onKeyDown={this.handleEnter} onBlur={this.handleEnter}
            className='hide' name={this.props.eleId} defaultValue={this.editableLabel}></input><AddButton label="+" /></>
        }

    }
    render(){
        const {editableLabel} = this.state;
        return (
            <>
                    <span className={this.props.classes} id={this.props.eleId} onClick={this.handleClick}>{editableLabel}</span>                    
                    {this.setInputType()}
            </>
        );
    }

}
export default EditableElements;