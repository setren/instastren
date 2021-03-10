import './App.css';
import { Col, Container, Navbar, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "./Icons/avatar.png"
import compass from "./Icons/compass.png"
import home from "./Icons/home.png"
import love from "./Icons/love.png"
import plane from "./Icons/paper-plane.png"
import bookmark from "./Icons/bookmark.png"
import settings from "./Icons/settings.png"
import switchpng from "./Icons/switchpng.png"
import { connect } from "react-redux";
import { switchDark } from './Redux/actions'
import React, { Component } from 'react'

class PageHeader extends Component {
  darkMode = () => {
    this.props.toDark("black", "white")
  }
  lightMode = () => {
    this.props.toDark("white", "black")
  }
  render() {
    return (
      <Container fluid className="header" style={{ backgroundColor: this.props.background }}>
        <Row className="header">
          <Container>
            <Row>
              <Col sm={4}>
                <Navbar >
                  <Link to="/"><img className="image-header" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png%202x" alt="𝕴𝖓𝖘𝖙𝖆𝖘𝖙𝖗𝖊𝖓"></img></Link>
                </Navbar>
              </Col>
              <Col sm={4}>
                {this.props.background === "white" ? <p style={{ fontSize: "40px", cursor: "pointer" }} onClick={this.darkMode} >🌑</p> : <p style={{ fontSize: "40px", cursor: "pointer" }} onClick={this.lightMode} >🌕</p>}
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
    )
  }
}

const mapStateToProps = (state) => {
  return { background: state.background };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toDark: (param1, param2) => dispatch(switchDark(param1, param2)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);