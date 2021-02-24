import React, { Component } from 'react'
import { Tab, Col, Container, FormControl, Row, Button } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';


export default class UbahKataSandi extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <Row>
                    <Col sm={4}>Kata sandi lama</Col>
                    <Col sm={8}>
                      <FormControl></FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Kata sandi baru</Col>
                    <Col sm={8}><FormControl></FormControl></Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Konfirmasi kata sandi baru</Col>
                    <Col sm={8}>
                      <FormControl></FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Button>Ubah kata sandi</Button>
                    </Col>
                    <Col sm={8}>
                      <p>Lupa kata sandi</p>
                    </Col>
                  </Row>
                </Container>            </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}
