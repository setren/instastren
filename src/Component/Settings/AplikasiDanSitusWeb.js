import React, { Component } from 'react'
import { Row, Col, Container, Tab, Tabs } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';

export default class AplikasiDanSitusWeb extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Aplikasi dan Situs Web</h1>
                  <Tabs defaultActiveKey="aktif" transition={false} id="noanim-tab-example">
                    <Tab eventKey="aktif" title="Aktif">
                      <p>Ini adalah aplikasi dan situs web di mana Anda login menggunakan Instagram dan baru saja digunakan. Aplikasi dan situs web tersebut dapat meminta info yang Anda pilih untuk dibagikan kepadanya.</p>
                    </Tab>
                    <Tab eventKey="kadaluwarsa" title="Kadaluwarsa">
                      <p>Ini adalah aplikasi dan situs web di mana Anda login menggunakan Instagram dan belum digunakan selama beberapa saat. Aplikasi dan situs web tersebut mungkin tetap memiliki akses ke info yang sudah Anda bagikan sebelumnya, tapi kemampuannya melakukan permintaan informasi pribadi tambahan sudah kedaluwarsa.</p>
                    </Tab>
                    <Tab eventKey="dihapus" title="Dihapus">
                      <p>Berikut ini adalah aplikasi dan situs web yang Anda hapus dari akun. Artinya, situs web tersebut masih bisa mengakses info yang sudah Anda bagikan sebelumnya, tapi tidak bisa membuat permintaan tambahan untuk info pribadi.</p>
                    </Tab>
                  </Tabs>
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}
