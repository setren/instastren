import './App.css';
import React, { Component } from 'react';
import { Col, Container, Navbar, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Settings from './Component/Settings'
import Home from './Component/Home'
import Message from './Component/Message'
import Arround from './Component/Arround'
import Activity from './Component/Activity'
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "./Icons/avatar.png"
import compass from "./Icons/compass.png"
import home from "./Icons/home.png"
import love from "./Icons/love.png"
import plane from "./Icons/paper-plane.png"
import bookmark from "./Icons/bookmark.png"
import settings from "./Icons/settings.png"
import switchpng from "./Icons/switchpng.png"

class App extends Component {
  render() {
    console.log('app render')
    return (
      <Router>
        <Container fluid className="header">
          <Row className="header">
            <Container>
              <Row>
                <Col sm={4}>
                  <Navbar>
                    <Link to="/"><img className="image-header" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x" alt="𝕴𝖓𝖘𝖙𝖆𝖘𝖙𝖗𝖊𝖓"></img></Link>
                  </Navbar>
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4} >
                  <Navbar className="navbar-icons">
                    <Link to="/"><img className="icon-header" alt="icon-header" src={home} ></img></Link>
                    <Link to="/message"><img className="icon-header" alt="icon-header" src={plane} ></img></Link>
                    <Link to="/activity"><img className="icon-header" alt="icon-header" src={love} ></img></Link>
                    <Link to="/arround"><img className="icon-header" alt="icon-header" src={compass} ></img></Link>
                    <OverlayTrigger
                      trigger="click"
                      key="bottom"
                      placement="bottom"
                      overlay={
                        <Popover id={"popover-positioned-bottom"}>
                          <Popover.Content>
                            <Link to="#profil"><img className="icon-header" alt="icon-header" src={avatar} ></img>  Profil</Link>
                            <br />
                            <Link to="#disimpan"><img className="icon-header" alt="icon-header" src={bookmark} ></img>  Disimpan</Link>
                            <br />
                            <Link to="/settings"><img className="icon-header" alt="icon-header" src={settings} ></img>  Pengaturan</Link>
                            <br />
                            <Link to="#ganti-akun"><img className="icon-header" alt="icon-header" src={switchpng} ></img>  Ganti Akun</Link>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <img className="icon-header" alt="icon-header" src={avatar} ></img>
                    </OverlayTrigger>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/message" component={Message} />
          <Route path="/activity" component={Activity} />
          <Route path="/arround" component={Arround} />
          <Route path="/settings" component={Settings} />
        </Switch >
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
      </Router >
    )
  }
}

export default App;
