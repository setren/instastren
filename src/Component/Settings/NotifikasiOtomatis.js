import React, { Component } from 'react'
import { Tab, Row, Col, Container, Form } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';
import update from 'immutability-helper';


export default class NotifikasiOtomatis extends Component {
  state =
    JSON.parse(localStorage.getItem("notifikasiOtomatis")) ||
    {
      notifikasiOtomatis:
      {
        "push_prefs": [
          {
            "title": "Suka",
            "example": "johnappleseed menyukai foto Anda.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Orang yang Saya Ikuti",
                2
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "likes",
            "checked": 1
          },
          {
            "title": "Komentar",
            "example": "johnappleseed mengomentari: \"Tembakan bagus!\"",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Orang yang Saya Ikuti",
                2
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "comments",
            "checked": 3
          },
          {
            "title": "Suka Komentar",
            "example": "johnappleseed menyukai komentar Anda: \"Tembakan bagus!\"",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Orang yang Saya Ikuti",
                2
              ]
            ],
            "name": "comment_likes",
            "checked": 2
          },
          {
            "title": "Suka dan Komentar di Foto tentang Anda",
            "example": "johnappleseed mengomentari sebuah kiriman yang menandai Anda.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Orang yang Saya Ikuti",
                2
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "like_and_comment_on_photo_user_tagged",
            "checked": 2
          },
          {
            "title": "Pengikut Baru",
            "example": "John Appleseed (johnappleseed) mulai mengikuti Anda.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "new_follower",
            "checked": 3
          },
          {
            "title": "Permintaan Mengikuti Diterima",
            "example": "John Appleseed (johnappleseed) menerima permintaan Anda untuk mengikutinya.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "follow_request_accepted",
            "checked": 3
          },
          {
            "title": "Teman yang menggunakan Instagram",
            "example": "Teman Facebook Anda, John Appleseed, menggunakan Instagram sebagai johnappleseed.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "connection_notification",
            "checked": 3
          },
          {
            "title": "Permintaan Instagram Direct",
            "example": "johnappleseed ingin mengirimi Anda pesan.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "pending_direct_share",
            "checked": 3
          },
          {
            "title": "Instagram Direct",
            "example": "johnappleseed mengirimi Anda pesan.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "direct_share_activity",
            "checked": 3
          },
          {
            "title": "Permintaan Grup",
            "example": "johnappleseed ingin menambahkan janeappleseed ke grup Anda.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "direct_group_requests",
            "checked": 3
          },
          {
            "title": "Pengingat",
            "example": "Anda memiliki notifikasi yang tidak terlihat, dan notifikasi serupa lainnya.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "notification_reminders",
            "checked": 3
          },
          {
            "title": "Postingan dan Berita Pertama",
            "example": "Lihat cerita pertama johnappleseed di Instagram, dan notifikasi serupa lainnya.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Orang yang Saya Ikuti",
                2
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "first_post",
            "checked": 3
          },
          {
            "title": "Pengumuman Produk",
            "example": "Unduh Boomerang, aplikasi terbaru Instagram.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Hidup",
                3
              ]
            ],
            "name": "announcements",
            "checked": 3
          },
          {
            "title": "Permintaan Dukungan",
            "example": "Permintaan dukungan Anda dari Juli 10 baru saja diperbarui.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Hidup",
                3
              ]
            ],
            "name": "report_updated",
            "checked": 3
          },
          {
            "title": "Login Tidak Dikenal",
            "example": [
              "i",
              "P",
              "h",
              "o",
              "n",
              "e",
              " ",
              "1",
              "1",
              " ",
              "A",
              "p",
              "p",
              "l",
              "e",
              " ",
              "y",
              "a",
              "n",
              "g",
              " ",
              "t",
              "i",
              "d",
              "a",
              "k",
              " ",
              "d",
              "i",
              "k",
              "e",
              "n",
              "a",
              "l",
              " ",
              "l",
              "o",
              "g",
              "i",
              "n",
              " ",
              "d",
              "a",
              "r",
              "i",
              " ",
              "F",
              "o",
              "s",
              "t",
              "e",
              "r",
              " ",
              "C",
              "i",
              "t",
              "y",
              ",",
              " ",
              "C",
              "A",
              ",",
              " ",
              "U",
              "S",
              "A",
              "."
            ],
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Hidup",
                3
              ]
            ],
            "name": "login_notification",
            "checked": 3
          },
          {
            "title": "Video Siaran Langsung",
            "example": "johnappleseed memulai video siaran langsung. Tonton sebelum siaran berakhir!",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Hidup",
                3
              ]
            ],
            "name": "live_broadcast",
            "checked": 3
          },
          {
            "title": "Unggahan Video IGTV",
            "example": [
              "V",
              "i",
              "d",
              "e",
              "o",
              " ",
              "A",
              "n",
              "d",
              "a",
              " ",
              "s",
              "u",
              "d",
              "a",
              "h",
              " ",
              "s",
              "i",
              "a",
              "p",
              " ",
              "d",
              "i",
              "t",
              "o",
              "n",
              "t",
              "o",
              "n",
              " ",
              "d",
              "i",
              " ",
              "I",
              "G",
              "T",
              "V",
              "."
            ],
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Hidup",
                3
              ]
            ],
            "name": "felix_upload_result",
            "checked": 3
          },
          {
            "title": "Jumlah Tayangan IGTV",
            "example": "Video IGTV Anda memiliki tayangan lebih dari 100K: \"Video Baru Saya!\".",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "view_count",
            "checked": 3
          },
          {
            "title": "Obrolan Video",
            "example": "Obrolan video masuk dari johnappleseed.",
            "options": [
              [
                "Nonaktif",
                1
              ],
              [
                "Dari Orang yang Saya Ikuti",
                2
              ],
              [
                "Dari Semua Orang",
                3
              ]
            ],
            "name": "video_call",
            "checked": 3
          }
        ]
      }
    }

  componentDidUpdate() {
    localStorage.setItem("notifikasiOtomatis", JSON.stringify(this.state))
  }

  onChangeValue(e, i) {
    // // console.log(e.target.value)
    // // console.log(i)
    // // console.log(ii)
    // const { notifikasiOtomatis: { push_prefs } } = this.state
    // const key = push_prefs[i]
    // const { checked } = key
    // console.log(checked)
    // const ijo = this.state.notifikasiOtomatis.push_prefs[i].checked
    // console.log(ijo)
    const value = e.target.value
    const collection = this.state
    const newCollection = update(collection, { notifikasiOtomatis: { push_prefs: { [i]: { checked: { $set: parseInt(value) } } } } })
    this.setState({ notifikasiOtomatis: newCollection.notifikasiOtomatis })
  }

  render() {
    console.log("render")
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
                  {
                    this.state.notifikasiOtomatis.push_prefs.map((item, i) =>
                      <Form key={i} >
                        <Form.Group >
                          <Form.Label >
                            <b>{item.title}</b>
                          </Form.Label>
                          <Col >
                            {
                              item.options.map((item, ii) =>
                                <Form.Check key={ii}
                                  id={this.state.notifikasiOtomatis.push_prefs[i].name + item[1]}
                                  type="radio"
                                  label={item[0]}
                                  name="formHorizontalRadios"
                                  value={item[1]}
                                  defaultChecked={this.state.notifikasiOtomatis.push_prefs[i].checked === item[1]}
                                  onChange={(e) => this.onChangeValue(e, i)}
                                />
                              )
                            }
                            <em>{item.example}</em>
                          </Col>
                        </Form.Group>
                      </Form>
                    )
                  }
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate >
    )
  }
}
