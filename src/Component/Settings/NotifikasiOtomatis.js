import React, { Component } from 'react'
import { Tab, Row, Col, Container, Form } from 'react-bootstrap';
import MainTemplate from '../../MainTemplate';
import SettingsTemplate from '../SettingsTemplate';


export default class NotifikasiOtomatis extends Component {
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="settings">
              <SettingsTemplate  {...this.props} />
              <Col sm={9} className="side-right">
                <Container>
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
                </Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </MainTemplate>
    )
  }
}
