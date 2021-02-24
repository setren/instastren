import React, { Component } from 'react'
import { Col, Container, FormControl, Row, Form, Button, Tab } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';

export default class EditProfil extends Component {
  render() {
    return (
      <MainTemplate >
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <Row>
                    <Col sm={4}>Nama</Col>
                    <Col sm={8}>
                      <FormControl></FormControl>
                      <p>Bantu orang menemukan akun Anda menggunakan nama yang orang-orang kenali tentang Anda: baik nama lengkap, nama panggilan, atau nama bisnis Anda.</p>
                      <p>Anda hanya bisa mengubah nama grup Anda dua kali dalam waktu 14 hari</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Nama Pengguna</Col>
                    <Col sm={8}>
                      <FormControl></FormControl>
                      <p>Di sebagian besar kasus, Anda tidak akan bisa mengubah nama pengguna kembali menjadi setrenfighter untuk 14 hari lain.</p>
                      <p>Pelajari Selengkapnya</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Situs Web</Col>
                    <Col sm={8}><FormControl></FormControl></Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Bio</Col>
                    <Col sm={8}>
                      <FormControl></FormControl>
                      <p>Informasi Pribadi</p >
                      <p>Berikan informasi pribadi Anda, bahkan jika akun digunakan untuk bisnis, hewan peliharaan, atau hal lainnya. Ini tidak akan menjadi bagian profil publik Anda.</p >
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Email</Col>
                    <Col sm={8}><FormControl></FormControl></Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Nomor Telepon</Col>
                    <Col sm={8}><FormControl></FormControl></Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Jenis Kelamin</Col>
                    <Col sm={8}><FormControl></FormControl></Col>
                  </Row>
                  <Row>
                    <Col sm={4}>Saran Akun Serupa</Col>
                    <Col sm={8}>
                      <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Cantumkan akun Anda saat menyarankan akun serupa yang mungkin ingin diikuti oleh orang-orang.[?]
" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Button>Kirim</Button>
                    </Col>
                    <Col sm={8}>
                      <p>Nonaktifkan sementara akun saya</p>
                    </Col>
                  </Row>
                </Container>

              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>
    )
  }
}
