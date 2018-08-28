import React, { Component } from 'react';
import './contactBox.css';

class ContactBox extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      submitted: false
    }
  }

  render() {
    return this.renderContent();
  }

  renderSubmitButton() {
    if (this.state.submitted) {
      return (
        <div>
          <button onClick={this.handleSubmit.bind(this)} className="button contact-box-button" value="Submit" disabled="true">Submit</button>
          <p>Thank you!</p>
          <p>I will get back to you shortly!</p>
        </div>
      )
    }
    else {
      return <button onClick={this.handleSubmit.bind(this)} className="button contact-box-button" value="Submit">Submit</button>
    }
  }

  renderContent() {
    if (this.state.active) {
      return (
        <div className="contact-box-container">
          <form className="contact-box">
            <label className="contact-box contact-box-label">
              Name:
              <input className="contact-box contact-box-text"
                type="text" value={this.state.name}
                onChange={ e => this.setState({ name : e.target.value }) }/>
            </label>
            <label className="contact-box contact-box-label">
              Email:
              <input className="contact-box contact-box-text"
              type="text" value={this.state.email}
              onChange={ e => this.setState({ email : e.target.value }) }/>
            </label>
            <label className="contact-box contact-box-label">
              Message:
              <textarea className="contact-box contact-box-text contact-box-text-message"
              value={this.state.body}
              onChange={ e => this.setState({ body : e.target.value }) }/>
            </label>
          </form>
          <div className="contact-box">
            {this.renderSubmitButton()}
          </div>
        </div>
      )
    }
    else {
      return (
        <button onClick={this.activateButton.bind(this)} className="button contact-box-button" value="Contact">Contact Me</button>
      )
    }
  }

  activateButton(event) {
    this.setState({active : true});
  }

  handleSubmit(event) {
    const payload = {
      "mail":{
        "source":"Personal Website Contact Box",
        "name":this.state.name,
        "body":this.state.body,
        "time":new Date().toLocaleString('en-US', { timeZone: 'UTC'}),
        "key":"c0zrj7bxf6"
        }
    }
    fetch(process.env.REACT_APP_MAILER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => {
      console.log(res);
      this.setState({submitted : true});
    }).catch(error => {
      console.log(error);
    })
  }
}

export default ContactBox;
