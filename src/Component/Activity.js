import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";
import MainTemplate from '../MainTemplate';

class Activity extends Component {
  render() {
    console.log('activity render')
    return (
      <MainTemplate>
        <Container className="template">
          <Row className="body">
            <p>Activity</p>
          </Row>
        </Container>
      </MainTemplate>
    )
  }
}

export default Activity