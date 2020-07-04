import React, { Component } from 'react'
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import allhair from '../../assets/img/allhair.jpg';

export class Contacts extends Component {
  render() {
    return (
      <div className='contacts-container'>
        <div className='contacts-grid'>
          <Row>
            <Col>
              <h2>Alvin Nsongambi</h2>
              <img src={allhair} alt='myself' className='contact-pic' />
              <p style={{textAlign: 'left'}}>Plagiarism is Art.</p>
            </Col>
            <Col>
              <h2>Contact Me</h2>
              <hr />
              <ListGroup>
                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <FontAwesomeIcon className='icon' icon='phone-square' /> (+256) 0701235619
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <FontAwesomeIcon className='icon' icon='fax' /> (+256) 0792100344
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <FontAwesomeIcon className='icon' icon='envelope' /> alvinnsongambi9@gmail.com
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <i className='icon fab fa-skype' aria-hidden='true' /> Alvin Nsongambi
                </ListGroupItemText>
                </ListGroupItem>

              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Contacts
