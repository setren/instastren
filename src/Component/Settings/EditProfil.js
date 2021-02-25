import React, { Component } from 'react'
import { Col, Container, FormControl, Row, Form, Button, Tab } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';
import db from "../../db.json"

export default class EditProfil extends Component {
  state = {
    data: db,
    EditProfil: JSON.parse(localStorage.getItem('EditProfil')) || {
      nama: "setrenfighter",
      namaPengguna: "setrenfighter",
      situsWeb: "",
      bio: "🍃Memang baik menjadi orang hebat, tapi lebih hebat menjadi orang baik🍃",
      email: "abdullahfathurrahman@gmail.com",
      nomorTelepon: 6287708227032,
      jenisKelamin: "laki-laki",
      saranAkun: true
    }
  }
  componentDidUpdate() {
    localStorage.setItem("EditProfil", JSON.stringify(this.state.EditProfil))
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      EditProfil:
      {
        nama: e.target.nama.value,
        namaPengguna: e.target.namaPengguna.value,
        situsWeb: e.target.situsWeb.value,
        bio: e.target.bio.value,
        email: e.target.email.value,
        nomorTelepon: e.target.nomorTelepon.value,
        jenisKelamin: e.target.jenisKelamin.value,
        saranAkun: e.target.saranAkun.checked
      }
    })
  }
  render() {
    return (
      <MainTemplate >
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <Form onSubmit={(e) => this.onSubmit(e)}>
                    <Row>
                      <Col className="edit-profil" sm={4}>
                        <img alt="card" src={this.state.data.data.user.profile_pic_url} />
                      </Col>
                      <Col sm={8} className="userName">
                        <strong>{this.state.EditProfil.nama}</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Nama</Col>
                      <Col sm={8}>
                        <FormControl id="nama" defaultValue={this.state.EditProfil.nama}></FormControl>
                        <p>Bantu orang menemukan akun Anda menggunakan nama yang orang-orang kenali tentang Anda: baik nama lengkap, nama panggilan, atau nama bisnis Anda.</p>
                        <p>Anda hanya bisa mengubah nama grup Anda dua kali dalam waktu 14 hari</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Nama Pengguna</Col>
                      <Col sm={8}>
                        <FormControl id="namaPengguna" defaultValue={this.state.EditProfil.namaPengguna}></FormControl>
                        <p>Di sebagian besar kasus, Anda tidak akan bisa mengubah nama pengguna kembali menjadi setrenfighter untuk 14 hari lain.</p>
                        <p>Pelajari Selengkapnya</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Situs Web</Col>
                      <Col sm={8}>
                        <FormControl id="situsWeb" defaultValue={this.state.EditProfil.situsWeb}></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Bio</Col>
                      <Col sm={8}>
                        <FormControl id="bio" defaultValue={this.state.EditProfil.bio}></FormControl>
                        <p>Informasi Pribadi</p >
                        <p>Berikan informasi pribadi Anda, bahkan jika akun digunakan untuk bisnis, hewan peliharaan, atau hal lainnya. Ini tidak akan menjadi bagian profil publik Anda.</p >
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Email</Col>
                      <Col sm={8}>
                        <FormControl id="email" defaultValue={this.state.EditProfil.email}></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Nomor Telepon</Col>
                      <Col sm={8}>
                        <FormControl id="nomorTelepon" defaultValue={this.state.EditProfil.nomorTelepon}></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Jenis Kelamin</Col>
                      <Col sm={8}>
                        <FormControl id="jenisKelamin" defaultValue={this.state.EditProfil.jenisKelamin}></FormControl>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>Saran Akun Serupa</Col>
                      <Col sm={8}>
                        <Form.Group id="formGridCheckbox">
                          <Form.Check id="saranAkun" defaultChecked={this.state.EditProfil.saranAkun} type="checkbox" label="Cantumkan akun Anda saat menyarankan akun serupa yang mungkin ingin diikuti oleh orang-orang.[?]
" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="edit-profil" sm={4}>
                        <Button type="submit" >Kirim</Button>
                      </Col>
                      <Col sm={8}>
                        <p>Nonaktifkan sementara akun saya</p>
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
