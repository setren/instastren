import { Component } from 'react';
import { Col, Container, Row, Card, FormControl } from 'react-bootstrap';
import dbPosts from './dbPosts.json'

class Home extends Component {
  state = {
    mainDatas: dbPosts,
    data: dbPosts.slice(0, 10),
    index: 0
  }
  handleWheel = (e) => {
    const mainDatas = this.state.mainDatas
    const data = this.state.data
    const index = this.state.index
    let indexNext = index + 1
    let dataSlice = mainDatas.slice(0, index + 1)
    if (e.deltaY > 0) {
      this.setState({ index: indexNext })
      this.setState({ data: dataSlice })
    }
  }
  render() {
    console.log('home render')
    return (
      <Container onWheel={(e) => this.handleWheel(e)}>
        <Row>
          <Col sm={8}>
            <Posts data={this.state.data} />
          </Col>
          <Col sm={4}>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
            <div className="card"><span><img src="card-avatar.png" />Anonym User</span></div>
          </Col>
        </Row>
      </Container >
    )
  }
}

class Posts extends Component {
  render() {
    console.log('posts render')
    return (
      <div>
        {this.props.data.map((item) =>
          <Card key={item.id}>
            <Card.Header>
              <Card.Title><img src="card-avatar.png" />{item.url}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={item.url} />
            <div>
              <span><img src="card-love.png" /></span>
              <span><img src="card-comment.png" /></span>
              <span><img src="card-plane.png" /></span>
              <span><img src="card-bookmark.png" /></span>
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle>{item.thumbnailUrl}</Card.Subtitle>
              <Card.Text>
                {item.id} suka
              </Card.Text>
            </Card.Body>
            <Card.Footer><FormControl placeholder="Tambahkan komentar" /></Card.Footer>
          </Card>
        )}
      </div>
    )
  }
}

export default Home