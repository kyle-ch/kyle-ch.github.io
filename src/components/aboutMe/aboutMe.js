import React, { Component } from 'react';
import './aboutMe.css';

class AboutMe extends Component {
  renderAboutMeBody() {
    const aboutMe = `I'm a full stack software engineer with experience in Ruby
    on Rails, ReactJS, and Elixir! I was born and raised in NYC but now I'm in Boston in my
    4th year at Northeastern University working on my Bachelor's degree in
    computer science and finance. I have experience as a full stack software engineer
    at Forward Financing and as a QA engineer at Jobcase.`
    const interests = `Talk to me about cars, food, sneakers, the latest
    streetwear drops, and anything tech related!`
    const opportunities = `I'm open to any new opportunties
    so feel free to contact me about your ideas!`
    return (
      <div className="aboutme__body is-size-5">
        <p className="aboutme__text">{aboutMe}</p>
        <p className="aboutme__text">{interests}</p>
        <p className="aboutme__text">{opportunities}</p>
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
