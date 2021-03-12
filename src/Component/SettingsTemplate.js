import React, { Component } from 'react'
import { withRouter, /* useHistory */ } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Nav } from 'react-bootstrap';


class SettingsTemplate extends Component {
  render() {
    console.log(this.props.background)
    return (
      <Col sm={3} className="side-left">
        <Nav variant="pills" className="flex-column">
          <Link className={this.props.location.pathname === "/settings" ? "active" : null} to={"/settings"} >Edit Profil</Link>
          <Link className={this.props.location.pathname === "/settings/ubah-kata-sandi" ? "active" : null} to={"/settings/ubah-kata-sandi"} >Ubah Kata Sandi</Link>
          <Link className={this.props.location.pathname === "/settings/aplikasi-dan-situs-web" ? "active" : null} to={"/settings/aplikasi-dan-situs-web"} >Aplikasi dan Situs Web</Link>
          <Link className={this.props.location.pathname === "/settings/email-dan-sms" ? "active" : null} to={"/settings/email-dan-sms"} >Email dan SMS</Link>
          <Link className={this.props.location.pathname === "/settings/notifikasi-otomatis" ? "active" : null} to={"/settings/notifikasi-otomatis"} >Notifikasi Otomatis</Link>
          <Link className={this.props.location.pathname === "/settings/kelola-kontak" ? "active" : null} to={"/settings/kelola-kontak"} >Kelola Kontak</Link>
          <Link className={this.props.location.pathname === "/settings/privasi-dan-keamanan" ? "active" : null} to={"/settings/privasi-dan-keamanan"} >Privasi dan Keamanan</Link>
          <Link className={this.props.location.pathname === "/settings/aktivitas-login" ? "active" : null} to={"/settings/aktivitas-login"} >Aktivitas Login</Link>
          <Link className={this.props.location.pathname === "/settings/email-dari-instastren" ? "active" : null} to={"/settings/email-dari-instastren"} >Email dari Instastren</Link>
        </Nav>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return { background: state.background };
};
export default connect(mapStateToProps, null)(withRouter(SettingsTemplate))