import React, { Component } from 'react'
import { Tab, Row, Col, Container, Form } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';

export default class EmailDanSMS extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Berlangganan:</h1>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Email Masukan" />
                    <p>Beri masukan di Instagram.</p>
                  </Form.Group>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Email Pengingat" />
                    <p>Dapatkan notifikasi yang mungkin Anda lewatkan.</p>
                  </Form.Group>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Email Produk" />
                    <p>Dapatkan tips tentang fitur Instagram.</p>
                  </Form.Group>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Email Berita" />
                    <p>Pelajari tentang fitur baru Instagram.</p>
                  </Form.Group>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}
