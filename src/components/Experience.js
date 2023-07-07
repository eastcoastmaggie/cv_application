import React, { Component } from 'react';
import EditableElements from './EditableElement';
import AddButton from './AddButton';

class Experience extends Component {
    constructor(props){
        super(props);
        this.addAdditionalExp = this.addAdditionalExp.bind(this);
        this.addAdditionalPoint = this.addAdditionalPoint.bind(this);
        this.state = {
            experience: this.props.exp,
          };
    }
    addAdditionalExp(exp) {
        this.setState({experience:  this.state.experience.concat(exp)});
    }
    addAdditionalPoint(employmentItem) {
        // find and replace the object in experience with a copy with more points in list
        console.log(this.state.experience[this.state.experience.indexOf(employmentItem)])
        let updatedList = this.state.experience;
        console.log(updatedList);
        let points = updatedList[(updatedList.indexOf(employmentItem))].list;

        points = points.concat({key:points.length+1, value:'New point'});

        updatedList = updatedList.map(original => {
            if (original === updatedList[(updatedList.indexOf(employmentItem))]) {
              // Increment the clicked counter
              original.list = points;
            }
            return original;
        
          });
        this.setState({experience: updatedList});
    }
    addButton = (label, clickHandle, param) => {
        if ( this.props.readOnly() === true){
            return <></>;
        } else {
            return <AddButton label={label} onButtonClick={clickHandle} parameter={param}/>
        }
    }


    render(){
        const employment = this.state.experience.map(employment =>
            <li key={employment.id}>
                
                <h4><EditableElements inputType="text" eleId="employment-title" classes="bold" readOnly={this.props.readOnly} textInner={employment.title} /></h4> 
                <span className='year'>(<EditableElements inputType="text" eleId="year" readOnly={this.props.readOnly} textInner={employment.year}/>)</span>
                <EditableElements inputType="text" eleId="company-title" classes="company displayBlock" readOnly={this.props.readOnly} textInner={employment.company} />
                <p className='summary'><EditableElements inputType="textarea" eleId="summary" classes="displayBlock" readOnly={this.props.readOnly} textInner={employment.summary} /></p>
                <ul>
                    {employment.list.map(point =>
                        <li key={point.key}><p><EditableElements inputType="text" eleId="point.key" classes="" readOnly={this.props.readOnly} textInner={point.value} /> </p></li> )}
                </ul>
                {this.addButton("+", this.addAdditionalPoint, employment)}
                
            </li>
            );
        
            return (
                <div id='experience'>
                    <h3 >Experience</h3>
                    <ul>{employment}</ul>
                    {this.addButton("add employment", this.addAdditionalExp, {id:this.state.experience.length+1, title:'Job Title', year: 2023, company:'Veridian Dynamics', 
                    summary:'job summary is what responsibilites you performed and what your every day looked like.', list:[{key:1, value:'point 1'}, {key:2, value:'point 2'}]})}
                </div>
            );
    }
}
export default Experience;