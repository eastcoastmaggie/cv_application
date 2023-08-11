import React, { Component } from 'react';
import { useState } from 'react';
import EditableElements from './EditableElement';
import AddButton from './AddButton';

class Skill extends Component {
    constructor(props){
        super(props);
        this.addAdditional = this.addAdditional.bind(this);
        this.state = {
            skills: this.props.skillList,
          };
    }
    addAdditional(skill) {
        this.setState({skills:  this.state.skills.concat(skill)});
    }
    
    addButton = (label, clickHandle, param) => {
        if ( this.props.readOnly() === true){
            return <></>;
        } else {
            return <AddButton label={label} onButtonClick={clickHandle} parameter={param}/>
        }
    }

    render(){
        const skills = this.state.skills.map(skill =>   
            <li key={crypto.randomUUID()}>
                <h4><EditableElements inputType="text" eleId="skill-name" classes="" readOnly={this.props.readOnly} textInner={skill.name} /></h4> 
            </li>
        );

        return (
            <div id='skills'>
                <h3 >Skills</h3>
                <ul>{skills}</ul>
                {this.addButton("Add Skill", this.addAdditional, {name:'Java', rating:1, id:this.state.skills.length+1})}

            </div>
        );
    }
    
}

export default Skill;