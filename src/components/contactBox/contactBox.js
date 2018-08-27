import React, { Component } from 'react';

class ContactBox extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      submitted: false
    }
  }

  render() {
    return (
      <div>
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
            <input className="contact-box contact-box-text"
            type="text" value={this.state.body}
            onChange={ e => this.setState({ body : e.target.value }) }/>
          </label>
        </form>
        {this.state.name}
        {this.renderSubmitButton()}
      </div>
    )
  }

  renderSubmitButton() {
    if (this.state.submitted) {
      return <input className="contact-box contact-box-submit" type="submit" value="Thank You!" disabled="true"/>
    }
    else {
      return <button onClick={this.handleSubmit.bind(this)} className="contact-box contact-box-submit" value="Submit" />
    }
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
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }
}

export default ContactBox;
