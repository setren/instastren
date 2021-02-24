import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";
import MainTemplate from '../MainTemplate';

class Message extends Component {
  render() {
    console.log('message render')
    return (
      <MainTemplate>
        <Container className="template">
          <Row className="body">
            message
        </Row>
        </Container>
      </MainTemplate>
    )
  }
}

export default Message