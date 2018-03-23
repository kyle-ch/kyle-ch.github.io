import React, { Component } from 'react';
import Resume from './KyleChanCoOp2017.pdf';

class Links extends Component {
  render() {
    return (
        <div className="links breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li><a href="https://github.com/kyle-ch"><span class="icon is-small"><i class="fab fa-github"></i></span></a></li>
            <li><a href={Resume}><span class="icon is-small"><i class="fas fa-file-alt"></i></span></a></li>
            <li><a href="https://www.linkedin.com/in/kyle-ch"><span class="icon is-small"><i class="fab fa-linkedin"></i></span></a></li>
          </ul>
        </div>
    );
  }
}

export default Links;
