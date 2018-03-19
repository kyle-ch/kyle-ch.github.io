import React, { Component } from 'react';
import './aboutMe.css';

class AboutMe extends Component {
  renderAboutMeBody() {
    const aboutMe = `I'm a full stack software engineer with experience in Ruby
    on Rails and React! I was born and raised in NYC but now I'm in Boston in my
    3rd year at Northeastern Universityworking in my Bachelor's degree in
    computer science and finance. Right now, I am a full stack engineer co-op at
    Forward Financing. I have also done a previous co-op at Jobcase.`
    const interests = `Talk to me about cars, food, the latest streetwear drops,
    and anything tech related!`
    return (
      <div className="AboutMe-body">
        <p className="AboutMe-text">{aboutMe}</p>
        <p className="AboutMe-interests">{interests}</p>
      </div>
    )
  }
  render() {
    return (
      <div className="AboutMe">
        <h2 className="AboutMe-header">
          Who am I?
        </h2>
      {this.renderAboutMeBody()}
      </div>
    );
  }
}

export default AboutMe;
