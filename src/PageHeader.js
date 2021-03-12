import './App.css';
import { Col, Container, Navbar, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "./Icons/avatar.png"
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

  componentDidUpdate() {
    document.body.style.backgroundColor = this.props.background === "black" ? "black" : "white"
  }

  render() {
    return (
      <Container fluid className="header" style={{ backgroundColor: this.props.background }}>
        <Row className="header">
          <Container>
            <Row>
              <Col sm={4}>
                <Navbar >
                  <Link to="/">
                    <p style={this.props.background === "white" ? { marginLeft: "0", marginBottom: "0", fontSize: "40px", cursor: "pointer", color: "black" } : { marginLeft: "0", marginBottom: "0", fontSize: "40px", cursor: "pointer", color: "white" }} >ιηѕтαѕтяєη</p>
                  </Link>
                </Navbar>
              </Col>
              <Col sm={4} className="px-5">
                {this.props.background === "white" ?
                  <p className="mx-5 py-3" style={{ fontSize: "20px", cursor: "pointer", whiteSpace: "pre", color: "black" }} onClick={this.darkMode} >Night</p> :
                  <p className="mx-5 py-3" style={{ fontSize: "20px", cursor: "pointer", whiteSpace: "pre", color: "white" }} onClick={this.lightMode} >Light</p>}
              </Col>
              <Col sm={4} >
                <Navbar className="navbar-icons">
                  <Link to="/">
                    <svg className="mr-3" fill={this.props.background === "white" ? "black" : "white"} height="38" viewBox="0 0 48 48" width="38"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                  </Link>
                  <Link to="/message">
                    <svg className="mr-3" fill={this.props.background === "white" ? "black" : "white"} height="40" viewBox="0 0 48 48" width="40"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                  </Link>
                  <Link to="/activity">
                    <svg className="mr-3" fill={this.props.background === "white" ? "black" : "white"} height="40" viewBox="0 0 48 48" width="40"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>
                  </Link>
                  <Link to="/arround">
                    <svg className="mr-3" fill={this.props.background === "white" ? "black" : "white"} height="43" viewBox="0 0 48 48" width="43"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                  </Link>
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
                    <svg fill={this.props.background === "white" ? "black" : "white"} height="42" viewBox="0 0 32 32" width="42"><path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg>
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