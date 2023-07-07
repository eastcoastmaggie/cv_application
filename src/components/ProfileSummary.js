import React, { Component } from 'react';
import EditableElements from './EditableElement';

class ProfileSummary extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h3 id='profile'>Profile</h3>
                <p><EditableElements inputType="text" eleId="profileSummary" classes="" readOnly={this.props.readOnly} textInner={this.props.profile} /></p>
            </div>
        );
    }
}
export default ProfileSummary;