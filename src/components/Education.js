import React, { Component } from 'react';
import AddButton from './AddButton';
import EditableElements from './EditableElement';

class Education extends Component {
    constructor(props){
        super(props);
        this.addAdditional = this.addAdditional.bind(this);
        this.addButton = this.addButton.bind(this);
        this.state = {
            education: this.props.certs,
            buttonState: this.props.readOnly(),
          };
    }

    addAdditional(record) {
        this.setState({education:  this.state.education.concat(record)});
    }
    addButton = () => {
        if ( this.props.readOnly() === true){
            return <></>;
        } else {
            return <AddButton label="+" onButtonClick={this.addAdditional} parameter={{title:'degree', facility:'University of TOP', id:crypto.randomUUID(), year:2020}}/>
        }
    }
    render(){

        
    const certs = this.state.education.map(certificate =>
        <li key={certificate.id}>
            <label><EditableElements inputType="text" eleId="certificate-title" classes="" readOnly={this.props.readOnly} textInner={certificate.title} /></label>
            <p><EditableElements inputType="text" eleId="certificate-facility" classes="" readOnly={this.props.readOnly} textInner={certificate.facility} /></p>
            <span><EditableElements inputType="text" eleId="certificate-year" classes="" readOnly={this.props.readOnly} textInner={certificate.year} /></span>
        </li>
        );

        return (
            <div id='education'>
                <h3 >Education</h3>
                <ul>{certs}</ul>
                {this.addButton()}
            </div>
        );
    }
}
export default Education;