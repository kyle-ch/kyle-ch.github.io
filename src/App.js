import React, { Component } from 'react';
import ProfilePic from './components/profilePic/profilePic';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import Links from './components/links/links';
import Experience from './components/experience/experience'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App columns">
        <div className="App-header column is-one-quarter-desktop">
          <div className="fixed">
            <ProfilePic/>
            <h1 className="App-title is-size-2 has-white-text-ter">{"Kyle Chan"}</h1>
            <Links/>
          </div>
        </div>
        <div className="column">
          <AboutMe/>
          {/* <Experience/> */}
          <Projects/>
          <footer className="simpleFooter">
            <a href="https://github.com/kyle-ch/kyle-ch.github.io">Source</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
