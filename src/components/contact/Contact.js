import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import allhair from "../../assets/img/allhair.jpg";

export class Contacts extends Component {
  render() {
    return (
      <div className="contacts-container">
        <div className="contacts-grid">
          ><h2>Alvin Nsongambi</h2>
          <img src={allhair} alt="myself" className="contact-pic" />
          <p style={{ textAlign: "left" }}>Plagiarism is Art.</p>
          <h2>Contact Me</h2>
          <hr />
          <FontAwesomeIcon className="icon" icon="phone-square" /> (+256)
          0701235619
          <FontAwesomeIcon className="icon" icon="fax" /> (+256) 0792100344 m>
          Text>
          <FontAwesomeIcon className="icon" icon="envelope" />{" "}
          alvinnsongambi9@gmail.com
          <i className="icon fab fa-skype" aria-hidden="true" /> Alvin Nsongambi
        </div>
      </div>
    );
  }
}

export default Contacts;
