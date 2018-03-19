import React, { Component } from 'react';
import ProfilePic from './components/profilePic/profilePic'
import AboutMe from './components/aboutMe/aboutMe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProfilePic/>
          <h1 className="App-title">{"Hi! I'm Kyle"}</h1>
        </header>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
