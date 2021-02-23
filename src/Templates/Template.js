import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Template extends Component {
  render() {
    return (
      <Container className="template">
        <Row className="body">
          {this.props.children}
        </Row>
      </Container>
    )
  }
}

export default Template