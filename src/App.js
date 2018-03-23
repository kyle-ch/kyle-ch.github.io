import React, { Component } from 'react';
import ProfilePic from './components/profilePic/profilePic';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import Links from './components/links/links';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProfilePic/>
          <h1 className="App-title is-size-2 has-white-text-ter">{"Hi! I'm Kyle"}</h1>
          <Links/>
        </header>
        <AboutMe/>
        <Projects/>
      </div>
    );
  }
}

export default App;
