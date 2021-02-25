import React, { Component } from 'react'
import { Tab, Row, Col, Container, Form } from 'react-bootstrap';
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
                <Container>
                  <h2>Privasi Akun</h2>
                  <Form.Check type="checkbox" label="Akun Pribadi" />
                  <p>Apabila akun bersifat pribadi, hanya orang yang Anda setujui yang dapat melihat foto dan video Anda di Instagram. Pengikut Anda yang ada tidak akan terpengaruh.</p>
                  <hr />
                  <h2>Status Aktivitas</h2>
                  <Form.Check type="checkbox" label="Tampilkan Status Aktivitas" />
                  <p>Izinkan akun yang Anda ikuti dan semua orang yang berkirim pesan dengan Anda untuk melihat kapan Anda terakhir aktif di aplikasi Instagram. Saat fitur ini dimatikan, Anda tidak akan bisa melihat status aktifitas akun lainnya.</p>
                  <hr />
                  <h2>Berbagi Cerita</h2>
                  <Form.Check type="checkbox" label="Izinkan Berbagi" />
                  <p>Izinkan orang membagikan cerita Anda sebagai pesan.</p>
                  <hr />
                  <h2>Komentar</h2>
                  <p>Edit Pengaturan Komentar</p>
                  <hr />
                  <h2>Foto tentang Anda</h2>
                  <Form.Group >
                    <Form.Check
                      type="radio"
                      label="Tambahkan Otomatis"
                      name="formHorizontalRadios"
                    />
                    <Form.Check
                      type="radio"
                      label="Tambahkan Manual"
                      name="formHorizontalRadios"
                    />
                  </Form.Group>
                  <p>Pilih cara menambahkan foto tentang Anda ke profil. Pelajari selengkapnya Foto tentang Anda</p>
                  <hr />
                  <h2>Data Akun</h2>
                  <p>Lihat Data Akun</p>
                  <hr />
                  <h2>Autentikasi Dua Faktor</h2>
                  <p>Edit Pengaturan Autentikasi Dua Faktor</p>
                  <hr />
                  <h2>Unduhan Data</h2>
                  <p>Minta Unduhan</p>
                  <hr />
                  <h2>Bantuan Privasi dan Keamanan</h2>
                  <p>Dukungan</p>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>
    )
  }
}
