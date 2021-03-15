import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from "react-redux";

class PageFooter extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="footer" >
          <Container>
            <Row >
              <Col style={{ backgroundColor: this.props.background }} sm={12}>
                <p style={{ color: this.props.color }}>
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

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};

export default connect(mapStateToProps)(PageFooter);