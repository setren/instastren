import React, { Component } from 'react'
import { Tab, Row, Col, Container } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';


export default class KelolaKontak extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Kelola Kontak</h1>
                  <p>Orang yang tercantum di sini adalah kontak yang Anda unggah ke Instagram. Untuk menghapus kontak yang disinkronkan, ketuk Hapus Semua. Kontak akan diunggah kembali saat Instagram menyinkronkan kontak Anda selanjutnya kecuali Anda membuka pengaturan perangkat dan menonaktifkan semua akses ke kontak.</p>
                  <p>Hanya Anda yang dapat melihat kontak, tapi Instagram menggunakan info yang sudah diunggah tentang kontak untuk membuat saran teman bagi Anda dan lainnya, serta memberikan pengalaman yang lebih baik untuk semua orang</p>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}
