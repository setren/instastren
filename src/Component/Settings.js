import { Component } from 'react';
import { Col, Container, FormControl, Row, Tab, Form, Button, Tabs, Nav } from 'react-bootstrap';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch
// } from "react-router-dom";
import Template from '../Templates/Template';


function Settings() {
  console.log('settings render')
  // let { url } = useRouteMatch();
  return (
    // <Router>
    //   <Row>
    //     <Container >
    //       <Row >
    //         <Col className="card">
    //           <Row className="card-setting">
    //             <Col className="column-setting" sm={3}>
    //               <Link to={`${url}`} ><li>Edit Profil</li></Link>
    //               <Link to={`${url}/ubah-kata-sandi`} ><li>Ubah Kata Sandi</li></Link>
    //               <Link to={`${url}/aplikasi-dan-situs-web`} ><li>Aplikasi dan Situs Web</li></Link>
    //               <Link to={`${url}/email-dan-sms`} ><li>Email dan SMS</li></Link>
    //               <Link to={`${url}/notifikasi-otomatis`} ><li>Notifikasi Otomatis</li></Link>
    //               <Link to={`${url}/kelola-kontak`} ><li>Kelola Kontak</li></Link>
    //               <Link to={`${url}/privasi-dan-keamanan`} ><li>Privasi dan Keamanan</li></Link>
    //               <Link to={`${url}/aktivitas-login`} ><li>Aktivitas Login</li></Link>
    //               <Link to={`${url}/email-dari-instasetren`} ><li>Email dari Instastren</li></Link>
    //             </Col>
    //             <Col className="column-setting" sm={9}>
    //               <Switch>
    //                 <Route exact path={`${url}`} ><EditProfil /></Route>
    //                 <Route path={`${url}/ubah-kata-sandi`}><UbahKataSandi /></Route>
    //                 <Route path={`${url}/aplikasi-dan-situs-web`}><AplikasiDanSitusWeb /></Route>
    //                 <Route path={`${url}/email-dan-sms`}><EmailDanSMS /></Route>
    //                 <Route path={`${url}/notifikasi-otomatis`} ><NotifikasiOtomatis /></Route>
    //                 <Route path={`${url}/kelola-kontak`} ><KelolaKontak /></Route>
    //                 <Route path={`${url}/privasi-dan-keamanan`}><PrivasiDanKeamanan /></Route>
    //                 <Route path={`${url}/aktivitas-login`} ><AktivitasLogin /></Route>
    //                 <Route path={`${url}/email-dari-instastren`}><EmailDariInstastren /></Route>
    //               </Switch>
    //             </Col>
    //           </Row>
    //         </Col>
    //       </Row>
    //     </Container >
    //   </Row >
    // </Router >
    <Template>
      <Container className="settings">
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row className="settings">
            <Col sm={3} className="side-left">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1">Edit Profil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Ubah Kata Sandi</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Aplikasi dan Situs Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">Email dan SMS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">Notifikasi Otomatis</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6">Kelola Kontak</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="7">Privasi dan Keamanan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="8">Aktivitas Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="9">Email dari Instagram</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="side-right">
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <EditProfil />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <UbahKataSandi />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <AplikasiDanSitusWeb />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <EmailDanSMS />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <NotifikasiOtomatis />
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <KelolaKontak />
                </Tab.Pane>
                <Tab.Pane eventKey="7">
                  <PrivasiDanKeamanan />
                </Tab.Pane>
                <Tab.Pane eventKey="8">
                  <AktivitasLogin />
                </Tab.Pane>
                <Tab.Pane eventKey="9">
                  <EmailDariInstastren />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Template>
  )
}

class EditProfil extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

class UbahKataSandi extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={4}>Kata sandi lama</Col>
          <Col sm={8}>
            <FormControl></FormControl>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>Kata sandi baru</Col>
          <Col sm={8}><FormControl></FormControl></Col>
        </Row>
        <Row>
          <Col sm={4}>Konfirmasi kata sandi baru</Col>
          <Col sm={8}>
            <FormControl></FormControl>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Button>Ubah kata sandi</Button>
          </Col>
          <Col sm={8}>
            <p>Lupa kata sandi</p>
          </Col>
        </Row>
      </div>)
  }
}

class AplikasiDanSitusWeb extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

class EmailDanSMS extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

class NotifikasiOtomatis extends Component {
  render() {
    return (
      <div>
        <Form.Group>
          <Form.Label>
            Suka
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Orang yang Saya Ikuti"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Komentar
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Orang yang Saya Ikuti"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Suka Komentar
          </Form.Label>
          <Col>
            <Form.Check
              type="Radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Orang yang Saya Ikuti"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Suka dan Komentar di Foto tentang Anda
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Orang yang Saya Ikuti"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Permintaan Mengikuti Diterima
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Permintaan Instastren Direct
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Instastren Direct
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Pengingat
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Postingan dan Berita Pertama
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Orang yang Saya Ikuti"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Jumlah Tayangan ISTV
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Dari Semua Orang"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Permintaan Dukungan
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Hidup"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Video Siaran Langsung
          </Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Nonaktif"
              name="formHorizontalRadios"
            />
            <Form.Check
              type="radio"
              label="Hidup"
              name="formHorizontalRadios"
            />
          </Col>
        </Form.Group>
      </div>
    )
  }
}

class KelolaKontak extends Component {
  render() {
    return (
      <div>
        <h1>Kelola Kontak</h1>
        <p>Orang yang tercantum di sini adalah kontak yang Anda unggah ke Instagram. Untuk menghapus kontak yang disinkronkan, ketuk Hapus Semua. Kontak akan diunggah kembali saat Instagram menyinkronkan kontak Anda selanjutnya kecuali Anda membuka pengaturan perangkat dan menonaktifkan semua akses ke kontak.</p>
        <p>Hanya Anda yang dapat melihat kontak, tapi Instagram menggunakan info yang sudah diunggah tentang kontak untuk membuat saran teman bagi Anda dan lainnya, serta memberikan pengalaman yang lebih baik untuk semua orang</p>
      </div>
    )
  }
}

class PrivasiDanKeamanan extends Component {
  render() {
    return (
      <div>PrivasiDanKeamanan</div>
    )
  }
}

class AktivitasLogin extends Component {
  render() {
    return (
      <div>AktivitasLogin</div>
    )
  }
}

class EmailDariInstastren extends Component {
  render() {
    return (
      <div>EmailDariInstastren</div>
    )
  }
}

export default Settings