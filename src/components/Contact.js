import React, { Component } from 'react';
import EditableElements from './EditableElement';

class Contact extends Component {
    constructor(props){
        super(props);
    }

    clickableLink = () => {
        if ( this.props.readOnly() === true){
            return <a href={this.props.website} target='_new'>
            <EditableElements inputType="text" eleId="website" classes="" readOnly={this.props.readOnly} textInner={this.props.website} /></a>;
        } else {
            return <span class='link'>
            <EditableElements inputType="text" eleId="website" classes="" readOnly={this.props.readOnly} textInner={this.props.website} /></span>
        }
    }


    render(){
        return (
            <div id="contact">
                <h3>Contact</h3>
                <label id='address-label'>Address</label>
                <p id='address'>
                    <EditableElements inputType="text" eleId="address-one" classes="" readOnly={this.props.readOnly} textInner={this.props.street} /> &nbsp;
                    <EditableElements inputType="text" eleId="address-two" classes="" readOnly={this.props.readOnly} textInner={this.props.street2} /> &nbsp;
                    <EditableElements inputType="text" eleId="address-city" classes="" readOnly={this.props.readOnly} textInner={this.props.city} />, &nbsp;
                    <EditableElements inputType="text" eleId="address-prov" classes="" readOnly={this.props.readOnly} textInner={this.props.prov} /> &nbsp;
                    <EditableElements inputType="text" eleId="address-country" classes="" readOnly={this.props.readOnly} textInner={this.props.country} />
                </p>

                <label id='phone-label'>Phone</label>
                <p><EditableElements inputType="text" eleId="phone" classes="" readOnly={this.props.readOnly} textInner={this.props.phone} /></p>

                <label id='email-label'>Email</label>
                <p><EditableElements inputType="text" eleId="email" classes="" readOnly={this.props.readOnly} textInner={this.props.email} /></p>

                <label id='website-label'>Website</label>
                <p>{this.clickableLink()}</p>
            </div>
        );
    }
}
export default Contact;