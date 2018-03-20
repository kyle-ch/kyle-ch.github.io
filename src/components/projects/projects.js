import React, { Component } from 'react';
import Project from './project';
import Buyerspace from './buyerspace.png';
import * as ProjectsConstants from '../../constants/projectsConstants';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects has-text-left">
        <h1 className="title">Projects</h1>
        <Project
          title="Buyerspace"
          content={ProjectsConstants.buyerspaceContent}
          photo={Buyerspace}
        />
      </div>
    );
  }
}

export default Projects;
