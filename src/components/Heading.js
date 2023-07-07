import React, { Component } from 'react';
import { useState } from 'react';
import EditableElements from './EditableElement';

class Heading extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <h1>
                    
                    <EditableElements inputType="text" eleId="firstName" classes="light displayBlock" readOnly={this.props.readOnly} textInner="Watson" />
                    <EditableElements inputType="text" eleId="lastName" classes="bold displayBlock" readOnly={this.props.readOnly} textInner="the Cat" />
                </h1>
                
                <h2><EditableElements inputType="text" eleId="profession" classes="displayBlock" readOnly={this.props.readOnly} textInner="Professional Title" /></h2>
            </>
        );
    }

}
export default Heading;