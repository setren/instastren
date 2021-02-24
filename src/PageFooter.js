import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default class PageFooter extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="footer">
          <Container>
            <Row>
              <Col sm={12}>
                <p>
                  Tentang
                  Blog
                  Pekerjaan
                  Bantuan
                  API
                  Privasi
                  Ketentuan
                  Akun Teratas
                  Tagar
                  Lokasi
                  Bahasa Indonesia
                  © 2021 Instastren from Setren.inc
                  </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container >
    )
  }
}
