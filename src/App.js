import React, { Component } from 'react';
import Contact from './components/Contact';
import ProfileSummary from './components/ProfileSummary';
import Education from './components/Education';
import Experience from './components/Experience'; 
import Skill from './components/Skill';
import Heading from './components/Heading';
import EditableElements from './components/EditableElement';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isViewOnly: false,
    };
    this.toggleView = this.toggleView.bind(this);
    this.readOnly = this.readOnly.bind(this);
  }

  toggleView = () => {
    this.setState({isViewOnly: this.state.isViewOnly ? false : true});
  }
  readOnly = () => {

    return this.state.isViewOnly;
  }

  render() {
    const education = [{title:'degree', facility:'University of TOP', year:2020}];
    const expr = [{ title:'Job Title', year: 2023, company:'Veridian Dynamics', summary:'job summary is what responsibilites you performed and what your every day looked like.', 
                  list:[{value:'point 1'}, {value:'point 2'}] }, ];
    const skillList = [{name:'HTML/CSS/JS', rating:5},{name:'React', rating:2},{name:'Java', rating:1}]
    const instruction = this.readOnly() === true ? "" : "Click on the values to edit."
    return (
      <div id='app'>
        <div id='topbar'>
      
          <div class="toggle-button b2" id="button-10">
            <input type="checkbox" class="checkbox" onChange={() =>{this.toggleView()}} />
            <div class="knobs">
              <span>Edit</span>
            </div>
            <div class="layer"></div>
          </div>
          <div>{instruction}</div>
                      
        </div>
        <div id='profile-image'>
          <div>
            
          </div>
        </div>
        <div id='sidebar'>
          <ProfileSummary profile='something about me...' readOnly={this.readOnly} />
          <Contact street='123 Main Ave.' city='Somewhereville' prov='PE' country='Canada' phone='555-123-1234' 
          email='address@example.com' website='www.example.com' readOnly={this.readOnly} />
          <Education certs={education} readOnly={this.readOnly} />
        </div>
        <header id='header'>
          <Heading readOnly={this.readOnly}/>
        </header>
        <div id='main'>
          <Experience exp={expr} readOnly={this.readOnly} />
          <Skill skillList={skillList} readOnly={this.readOnly} />
        </div>
      </div>
    );
  }
}
export default App;
