import React, { Component } from 'react';
import './aboutMe.css';

class AboutMe extends Component {
  renderAboutMeBody() {
    const aboutMe = `I'm a full stack software engineer with experience in Ruby
    on Rails, ReactJS, and Elixir! I was born and raised in NYC but now I'm in Boston in my
    3rd year at Northeastern University working on my Bachelor's degree in
    computer science and finance. Currently, I am a full stack engineer co-op at
    Forward Financing.`
    const interests = `Talk to me about cars, food, sneakers, the latest
    streetwear drops, and anything tech related!`
    return (
      <div className="aboutme__body is-size-5">
        <p className="aboutme__text">{aboutMe}</p>
        <p className="aboutme__text aboutme__interests">{interests}</p>
      </div>
    )
  }
  render() {
    return (
      <div className="aboutme has-text-left">
        <h2 className="aboutme__header title">
          whoami
        </h2>
      {this.renderAboutMeBody()}
      </div>
    );
  }
}

export default AboutMe;
