import React, { Component } from 'react'
import { Tab, Row, Col, Container } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';


export default class PrivasiDanKeamanan extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>PrivasiDanKeamanan</Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>
    )
  }
}
