import React, { Component } from 'react';

class Project extends Component {

  render() {
    return (
      <div className="project">
        <div className="columns is-desktop">
          <div className="column">
            <p className="is-size-3">{this.props.title}</p>
            <p className="is-size-5 has-text-grey">{this.props.content}</p>
          </div>
          <div className="column">
            <img className="project-photo" src={this.props.photo} alt="Buyerspace"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
