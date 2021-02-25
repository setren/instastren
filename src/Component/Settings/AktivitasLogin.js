import React, { Component } from 'react'
import { Tab, Row, Col, Container } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';

export default class AktivitasLogin extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  <h1>Aktivitas Login</h1>
                  <strong>Tempat anda login</strong>
                  <Login />
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>

    )
  }
}


class Login extends Component {
  state = {
    logs: {
      "data": {
        "suspicious_logins": [
          {
            "id": "17848451237521607",
            "location": "Kalasan, Yogyakarta, Indonesia",
            "latitude": -7.76034,
            "longitude": 110.477,
            "device": "Linux",
            "timestamp": 1613808114
          },
          {
            "id": "17904958171682698",
            "location": "Sleman",
            "latitude": -7.68263,
            "longitude": 110.339,
            "device": "Linux",
            "timestamp": 1612880786
          },
          {
            "id": "17907391735624937",
            "location": "Pengasih, Jawa Tengah, Indonesia",
            "latitude": -7.80513,
            "longitude": 110.165,
            "device": "Ubuntu",
            "timestamp": 1610360265
          },
          {
            "id": "17915597581519565",
            "location": "Surabaya, Indonesia",
            "latitude": -7.2647,
            "longitude": 112.743,
            "device": "Windows",
            "timestamp": 1607224414
          }
        ],
        "sessions": [
          {
            "id": "26:1613992128",
            "location": "Kotagede, Yogyakarta, Indonesia",
            "latitude": -7.81667,
            "longitude": 110.383,
            "device": "Linux ini",
            "timestamp": 1614266376,
            "login_timestamp": 1613992128,
            "is_current": true,
            "login_id": "17857901102458841"
          },
          {
            "id": "14:1565879019",
            "location": "Kotagede, Yogyakarta, Indonesia",
            "latitude": -7.81667,
            "longitude": 110.383,
            "device": "Samsung SM-A205F",
            "timestamp": 1614236612,
            "login_timestamp": 1565879019,
            "is_current": false,
            "login_id": "17887968859388129"
          },
          {
            "id": "1:1612880786",
            "location": "Kalasan, Yogyakarta, Indonesia",
            "latitude": -7.76034,
            "longitude": 110.477,
            "device": "Linux",
            "timestamp": 1613791315,
            "login_timestamp": 1612880786,
            "is_current": false,
            "login_id": "17904958171682698"
          },
          {
            "id": "8:1610360265",
            "location": "Temanggung, Jawa Tengah, Indonesia",
            "latitude": -7.3114,
            "longitude": 110.1771,
            "device": "Ubuntu",
            "timestamp": 1611923436,
            "login_timestamp": 1610360265,
            "is_current": false,
            "login_id": "17907391735624937"
          },
          {
            "id": "0:1607224414",
            "location": "Surabaya, Indonesia",
            "latitude": -7.2647,
            "longitude": 112.743,
            "device": "Windows",
            "timestamp": 1607224414,
            "login_timestamp": 1607224414,
            "is_current": false,
            "login_id": "17915597581519565"
          },
          {
            "id": "22:1601102687",
            "location": "Karangkendal, Jawa Barat, Indonesia",
            "latitude": -6.58333,
            "longitude": 108.5,
            "device": "Windows",
            "timestamp": 1601102687,
            "login_timestamp": 1601102687,
            "is_current": false,
            "login_id": "17869620953007461"
          },
          {
            "id": "13:1600479854",
            "location": "Karangkendal, Jawa Barat, Indonesia",
            "latitude": -6.58333,
            "longitude": 108.5,
            "device": "Windows",
            "timestamp": 1601040714,
            "login_timestamp": 1600479854,
            "is_current": false,
            "login_id": "17887127329694355"
          },
          {
            "id": "9:1599642382",
            "location": "Bayongbong, Jawa Barat, Indonesia",
            "latitude": -7.06194,
            "longitude": 107.579,
            "device": "Windows",
            "timestamp": 1599642382,
            "login_timestamp": 1599642382,
            "is_current": false,
            "login_id": "17936530873400816"
          }
        ]
      }
    }
  }
  render() {
    console.log(this.state.logs.data.suspicious_logins[0].location);
    return (
      <div>
        {
          this.state.logs.data.sessions.map((item) =>
            <div>
              <p>
                {item.location}<br />
                {item.timestamp} {item.device}
              </p>
            </div>
          )
        }
      </div>
    )
  }
}
