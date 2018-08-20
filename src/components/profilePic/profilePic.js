import React, { Component } from 'react';
import profilePicture from './profilePictureV2.jpg'
import './profilePic.css';

class ProfilePic extends Component {
  render() {
    return (
        <div className="profilepic">
          <img src={profilePicture} className="profilepicture" alt="Kyle"/>
        </div>
    );
  }
}

export default ProfilePic;
