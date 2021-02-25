import React, { Component } from 'react'
import { Tab, Col, Container, FormControl, Row, Button, Form } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';


export default class UbahKataSandi extends Component {
  state = {
    sandi: JSON.parse(localStorage.getItem("sandi")) || "setren"
  }
  componentDidUpdate() {
    localStorage.setItem("sandi", JSON.stringify(this.state.sandi))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (e.target.sandi.value === e.target.konfirmasisandi.value) {
      this.setState({ sandi: e.target.sandi.value })
    } else {
      alert('password salah')
    }
  }
  render() {
    console.log(this.state.sandi);
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <Form onSubmit={(e) => this.onSubmit(e)}>
                    <Row>
                      <Col sm={4}>Kata sandi lama</Col>
                      <Col sm={8}>
                        <FormControl defaultValue={this.state.sandi} type="password" readOnly></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4}>Kata sandi baru</Col>
                      <Col sm={8}>
                        <FormControl id="sandi" type="password" placeholder="new password"></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4}>Konfirmasi kata sandi baru</Col>
                      <Col sm={8}>
                        <FormControl id="konfirmasisandi" type="password" placeholder="confirm new password"></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <Button type="submit">Ubah kata sandi</Button>
                      </Col>
                      <Col sm={8}>
                        <p>Lupa kata sandi</p>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}
