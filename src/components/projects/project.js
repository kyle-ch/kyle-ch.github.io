import React, { Component } from 'react';
import './project.css'

class Project extends Component {

  render() {
    return (
      <div className="project">
        <div className="columns is-desktop">
          <div className="column">
            <p className="is-size-3">{this.props.title}</p>
            <a href={this.props.githubURL}><span className="icon is-small has-text-black"><i className="fab fa-github"></i></span></a>
            <p className="is-size-5 has-text-grey">{this.props.content}</p>
          </div>
          <div className="column">
            <img className={`project-photo ${this.props.iphone ? "iphone" : ""}`} src={this.props.photo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
