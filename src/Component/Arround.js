import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import db from "../ardb.json";
import db1 from "../ardb1.json";
import db2 from "../ardb2.json";
import MainTemplate from '../MainTemplate';

class Arround extends Component {
  state = {
    data: db,
    data1: db1,
    data2: db2,
    postCount1: false,
    postCount2: false,
  }
  async componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }

  scroll = (ev) => {
    var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    if (!st) {
      this.setState({ postCount1: false });
    } else if ((st + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
      if (this.state.postCount1 === false) {
        this.setState({ postCount1: true });
      } else if (this.state.postCount1 === true) {
        this.setState({ postCount2: true });
      }
    }
  }
  render() {
    console.log('arround render')
    return (
      <MainTemplate>
        <Container className="template">
          <Row className="body">
            <Posts data={this.state.data} />
            {this.state.postCount1 === true ? < Posts data={this.state.data1} /> : null}
            {this.state.postCount2 === true ? < Posts data={this.state.data2} /> : null}
          </Row>
        </Container>
      </MainTemplate>
    )
  }
}


class Posts extends Component {
  state = {
  }
  render() {
    console.log('posts render')
    return (
      <div >
        {this.props.data.data.user.edge_web_feed_timeline.edges.map((item, i) =>
          <Card className="arround" key={i} >
            <Card.Img variant="top" src={item.node.display_url} />
          </Card>)}
      </div >
    )
  }
}

export default Arround