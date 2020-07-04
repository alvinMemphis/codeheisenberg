import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import allhair from '../../assets/img/allhair.jpg';


export class Landing extends Component {
  render() {
    return (
      <div className='landing-container' style={{ width: '100%', margin: 'auto' }}>
        <Row>
          <Col>
            <img src={allhair} alt='avatar' className='avatar-img' />

            <div className='banner-text'>
              <h1 className='pt-2'>FullStack Mobile Apps  Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | Flask | React-Native | Android</p>

              <div className='social-links'>
                {/* LinkedIn */}
                <Link to='https://www.linkedin.com/in/alvin-nsongambi-609810167/' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-linkedin' aria-hidden='true' />
                </Link>

                {/* Github */}
                <Link to='https://github.com/AlvinMemphis' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-github-square' aria-hidden='true' />
                </Link>

                {/* Twitter */}
                <Link to='https://twitter.com/CodeHeisenberg/' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-twitter-square' aria-hidden='true' />
                </Link>

              </div>

            </div>

          </Col>
        </Row>
      </div>
    )
  }
}

export default Landing
