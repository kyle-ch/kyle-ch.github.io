import React, { Component } from 'react';
import Showcase from '../showcase/showcase'
import Buyerspace from './buyerspace.png';
import Hypecooker from './hypecooker.png';
import Collab from './collab.png';
import DinnerPal from './dinnerpal.png';
import * as ProjectsConstants from '../../constants/projectsConstants';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects has-text-left">
        <h1 className="title">Projects</h1>
        <Showcase className="project"
          githubURL="https://github.com/kyle-ch/DinnerPal"
          title="DinnerPal"
          content={ProjectsConstants.dinnerPalContent}
          photo={DinnerPal}
          iphone={true}
        />
        <Showcase className="project"
          githubURL="https://github.com/kyle-ch/Buyerspace"
          title="Buyerspace"
          content={ProjectsConstants.buyerspaceContent}
          photo={Buyerspace}
        />
        <Showcase className="project"
          githubURL="https://github.com/kyle-ch/hypecooker"
          title="Hypecooker"
          content={ProjectsConstants.hypecookerContent}
          photo={Hypecooker}
        />
        <Showcase className="project"
          githubURL="https://github.com/kyle-ch/Collab"
          title="Collab"
          content={ProjectsConstants.collabContent}
          photo={Collab}
        />
      </div>
    );
  }
}

export default Projects;
