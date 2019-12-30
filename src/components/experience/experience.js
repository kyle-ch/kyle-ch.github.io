import React, { Component } from 'react';
import Showcase from '../showcase/showcase';
import './experience.css';

class Experience extends Component {
  render() {
    return (
      <div className="experiences has-text-left">
        <h1 className="title">Professional Experience</h1>
        <Showcase className="experience"
          link="https://forwardfinancing.com"
          title="Forward Financing"
          content='placeholder here'
          photo=''
        />
      </div>
    );
  }
}

export default Experience;
