import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Languages from "./Languages";

import allhair from "../../assets/img/allhair.jpg";

export class Resume extends Component {
  render() {
    return (
      <div className="landin;g-container">
        <div className="resume-container">
          <div className="resume-grid">
            <div className="mt-4">
              <img src={allhair} alt="myself" className="contact-pic" />
            </div>

            <h2>Alvin Nsongambi </h2>
            <h4>Programmer</h4>
            <hr />

            <p>
              Creative and people-oriented Computer Scientist with extensive
              project management experience. Advanced knowledge and experience
              in fulfilling roles at both technical and operational level.{" "}
              <br />
              <br />
              Enjoys the challenge of bringing about efficiencies for tasks
              through collaborating with teams to meet desired goals and
              personal objectives.
            </p>

            <hr />

            <h5>Career Objective</h5>
            <p>
              To obtain a professional position in the field of Computer Science
              by utilizing my relevant experience, technical expertise and
              problem solving skills.
            </p>

            <hr />

            <h5>
              <FontAwesomeIcon className="mt-2 mr-2" icon="home" />
              Address
            </h5>
            <p>
              GDExperts <br />
              2nd floor, Kanjokya House <br /> Kamwokya
            </p>

            <h5>
              <FontAwesomeIcon className="mt-2 mr-2" icon="phone-alt" />
              Phone
            </h5>
            <p>+256701235619</p>

            <h5>
              <FontAwesomeIcon className="mt-2 mr-2" icon="envelope" />
              Email
            </h5>
            <p>alvinnsongmbi9@gmail.com</p>

            <h5>
              <FontAwesomeIcon className="mt-2 mr-2" icon="globe" />
              Web
            </h5>
            <p>
              <Link to="/codeheiseberg">Portfolio Website Home</Link>
            </p>
            <hr />

            <hr style={{ width: "100%", borderTop: "3px solid orange" }} />

            <h2>Education </h2>

            <Education
              startYear={2016}
              endYear={2019}
              schoolName="Makerere University"
              schoolDescription="Makerere university is the ranks Best in the whole of East Africa"
            />

            <Education
              startYear={2014}
              endYear={2015}
              schoolName="Busoga College Mwiri"
              schoolDescription="A traditional school well know for producing men of susbstance across the country in various fields and disciplines "
            />

            <Education
              startYear={2010}
              endYear={2013}
              schoolName="Kiira College Butiki"
              schoolDescription="One of the leading Schools in Jinja district both at A and O level "
            />
            <Education
              startYear={2003}
              endYear={2009}
              schoolName="Victoria Nile School"
              schoolDescription="A well esterbilshed perfroming primary school in jinja municiplaity "
            />

            <hr style={{ width: "100%", borderTop: "3px solid orange" }} />

            <h2>Experience </h2>

            <Experience
              startYear="4th June 2018"
              endYear="10th August 2018"
              jobName="Developer Consultant (Intern)"
              jobDescription="MIIC(Makerere innovation center)"
            />

            <Experience
              startYear="7th January 2019"
              endYear="4th September 2019"
              jobName="Software Developer"
              jobDescription="Software Developer forRestorcom LLC . Assisted in building mobile applications using ReactNative."
            />

            <Experience
              startYear="1st December 2019"
              endYear="Current"
              jobName="Mobile Applications Engineer"
              jobDescription="Developing and managing all mobile applications developments as well as integrations "
            />

            <hr style={{ width: "100%", borderTop: "3px solid orange" }} />

            <h2>Skills </h2>

            <Skills
              skill="JavaScript"
              icon="fab fa-js"
              iconColor="orange"
              progress={65}
              color="default"
            />

            <Skills
              skill="React"
              icon="fab fa-react"
              iconColor="blue"
              progress={75}
              color="default"
            />

            <Skills
              skill="ExpressJS"
              iconColor="green"
              icon="fab fa-node-js"
              progress={75}
              color="default"
            />

            <Skills
              skill="HTML/CSS"
              icon="fab fa-html5"
              iconColor="red"
              progress={70}
              color="warning"
            />

            <Skills
              skill="PHP"
              icon="fab fa-php"
              iconColor="#b108b1"
              progress={25}
              color="danger"
            />

            <hr style={{ width: "100%", borderTop: "3px solid orange" }} />

            <h2>Languages </h2>

            <Languages />

            <hr style={{ width: "100%", borderTop: "3px solid orange" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
