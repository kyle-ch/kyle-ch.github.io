import React, { Component } from 'react';
import ProfilePic from './components/profilePic/profilePic';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import Links from './components/links/links';
import ContactBox from './components/contactBox/contactBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App columns">
        <div className="App-header column is-one-quarter-desktop">
          <div className="fixed">
            <ProfilePic/>
            <h1 className="App-title is-size-2 has-white-text-ter">{"Kyle Chan"}</h1>
            <Links/>
            <ContactBox/>
          </div>
        </div>
        <div className="column">
          <AboutMe/>
          <Projects/>
        </div>
      </div>
    );
  }
}

export default App;
