import { Component } from 'react';
import { Col, Container, Row, Card, FormControl } from 'react-bootstrap';
import dbPosts from './dbPosts.json'

class Arround extends Component {
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
    console.log('arround render')
    return (
      <Container onWheel={(e) => this.handleWheel(e)} >
        <Row>
          <Col sm={4}>
            <Posts data={this.state.data} />
          </Col>
          <Col sm={4}>
            <Posts data={this.state.data} />
          </Col>
          <Col sm={4}>
            <Posts data={this.state.data} />
          </Col>
        </Row>
      </Container >
    )
  }
}

class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((item) =>
          <Card key={item.id}>
            <Card.Img src={item.url} />
          </Card>
        )}
      </div>
    )
  }
}

export default Arround