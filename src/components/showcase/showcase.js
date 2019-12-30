import React, { Component } from 'react';
import './showcase.css'

class Showcase extends Component {
  render() {
    return (
      <div className={"showcase item " + this.props.className}>
        <div className="columns is-desktop">
          <div className="column">
            <p className="is-size-3">{this.props.title}</p>
            {this.props.githubURL ? <a href={this.props.githubURL}><span className="icon is-small has-text-black"><i className="fab fa-github"></i></span></a> : ''}
            <p className="is-size-5">{this.props.content}</p>
          </div>
          <div className="column">
            <img
              className={`photo ${this.props.iphone ? "iphone" : ""}`}
              src={this.props.photo}
              alt={this.props.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
