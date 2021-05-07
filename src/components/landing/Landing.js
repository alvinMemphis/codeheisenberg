import React, { Component } from "react";
import allhair from "../../assets/img/allhair.jpg";

export class Landing extends Component {
  render() {
    return (
      <div
        className="landing-container"
        style={{ width: "100%", margin: "auto" }}
      >
        <img src={allhair} alt="avatar" className="avatar-img" />

        <div className="banner-text">
          <h1 className="pt-2">FullStack Mobile Apps Developer</h1>

          <hr />

          <p>
            HTML/CSS | Bootstrap | JavaScript | React | Flask | React-Native |
            Android | Golang
          </p>

          <div className="social-links">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/alvin-nsongambi-609810167/"
              target="_blank"
            >
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="https://github.com/AlvinMemphis" target="_blank">
              <i className="fab fa-github-square" aria-hidden="true" />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/CodeHeisenberg/" target="_blank">
              <i className="fab fa-twitter-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
