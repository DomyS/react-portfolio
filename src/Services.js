import React, { Component } from "react";

import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>services</h3>
        <h2>What We Offer</h2>
        <div className="row">
          <div>
            <span>
              <i class="fab fa-js" />
            </span>
            <h4>JavaScript</h4>
            <p>Something that you will fall in love</p>
          </div>
          <div>
            <span>
              <i class="fab fa-html5" />
            </span>
            <h4>HTML</h4>
            <p>Like a sandwich without bread</p>
          </div>
          <div>
            <span>
              <i class="fab fa-css3-alt" />
            </span>
            <h4>CSS</h4>
            <p>Some design to the sandwich</p>
          </div>
          <div>
            <span>
              <i class="fab fa-react" />
            </span>
            <h4>ReactJS</h4>
            <p>OMG moving forward</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
