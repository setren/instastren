import React, { Component } from 'react'
import { Tab, Row, Col, Container, Form } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';

export default class extends Component {
  state = {
    beriMasukan: JSON.parse(localStorage.getItem("emailDanSMS")) === null ? false : JSON.parse(localStorage.getItem("emailDanSMS")).beriMasukan,
    dapatkanNotifikasi: JSON.parse(localStorage.getItem("emailDanSMS")) === null ? false : JSON.parse(localStorage.getItem("emailDanSMS")).dapatkanNotifikasi,
    dapatkanTips: JSON.parse(localStorage.getItem("emailDanSMS")) === null ? false : JSON.parse(localStorage.getItem("emailDanSMS")).dapatkanTips,
    pelajariTentang: JSON.parse(localStorage.getItem("emailDanSMS")) === null ? false : JSON.parse(localStorage.getItem("emailDanSMS")).pelajariTentang,
  }
  handleCheck1 = () => {
    if (this.state.beriMasukan === true) {
      this.setState({ beriMasukan: false })
    } else {
      this.setState({ beriMasukan: true })
    }
  }
  handleCheck2 = () => {
    if (this.state.dapatkanNotifikasi === true) {
      this.setState({ dapatkanNotifikasi: false })
    } else {
      this.setState({ dapatkanNotifikasi: true })
    }
  }
  handleCheck3 = () => {
    if (this.state.dapatkanTips === true) {
      this.setState({ dapatkanTips: false })
    } else {
      this.setState({ dapatkanTips: true })
    }
  }
  handleCheck4 = () => {
    if (this.state.pelajariTentang === true) {
      this.setState({ pelajariTentang: false })
    } else {
      this.setState({ pelajariTentang: true })
    }
  }
  componentDidUpdate() {
    localStorage.setItem("emailDanSMS", JSON.stringify(this.state))
  }
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
                    <Form.Check type="checkbox" id="emailMasukan" label="Email Masukan" defaultChecked={this.state.beriMasukan} onChange={this.handleCheck1} />
                    <p>Beri masukan di Instagram.</p>
                  </Form.Group>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" id="emailPengingat" label="Email Pengingat" defaultChecked={this.state.dapatkanNotifikasi} onChange={this.handleCheck2} />
                    <p>Dapatkan notifikasi yang mungkin Anda lewatkan.</p>
                  </Form.Group>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" id="emailProduk" label="Email Produk" defaultChecked={this.state.dapatkanTips} onChange={this.handleCheck3} />
                    <p>Dapatkan tips tentang fitur Instagram.</p>
                  </Form.Group>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" id="emailBerita" label="Email Berita" defaultChecked={this.state.pelajariTentang} onChange={this.handleCheck4} />
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
