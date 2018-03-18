import React, { Component } from 'react';
import profilePicture from './profilePicture.jpeg'
import './profilePic.css';

class ProfilePic extends Component {
  render() {
    return (
      <div className="ProfilePic">
        <img src={profilePicture} className="ProfilePicture" alt="Kyle"/>
      </div>
    );
  }
}

export default ProfilePic;
