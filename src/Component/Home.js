import React, { Component } from 'react';
import { Col, Card, FormControl, Container } from 'react-bootstrap';
import Template from '../Templates/Template';
import db from "../db.json";
import db1 from "../db1.json";
import db2 from "../db2.json";
import ReadMoreReact from 'read-more-react';



class Home extends Component {
  state = {
    data: db,
    data1: db1,
    data2: db2,
    postCount1: false,
    postCount2: false,
  }
  componentDidMount() {
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
    console.log('home render')
    return (
      <Template >
        <Col sm={8} >
          <Posts data={this.state.data} />
          {this.state.postCount1 === true ? < Posts data={this.state.data1} /> : null}
          {this.state.postCount2 === true ? < Posts data={this.state.data2} /> : null}
        </Col>
        <Col sm={4} >
          <Container className="my-profile">
            <Card className="my-profile">
              <Card.Header>
                <Card.Title><img alt="card" src={this.state.data.data.user.profile_pic_url} /> {this.state.data.data.user.username}</Card.Title>
              </Card.Header>
            </Card>
            <p>Saran untuk anda</p>
            <Card className="people-may-you-know">
              <Card.Header>
                <Card.Title><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[4].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[4].node.owner.username}</Card.Title>
              </Card.Header>
              <Card.Header>
                <Card.Title><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[6].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[6].node.owner.username}</Card.Title>
              </Card.Header>
              <Card.Header>
                <Card.Title><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[8].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[8].node.owner.username}</Card.Title>
              </Card.Header>
              <Card.Header>
                <Card.Title><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[10].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[10].node.owner.username}</Card.Title>
              </Card.Header>
            </Card>
          </Container>
        </Col>
      </Template >
    )
  }
}


class Posts extends Component {
  render() {
    console.log('posts render')
    return (
      <div >
        {this.props.data.data.user.edge_web_feed_timeline.edges.map((item, i) =>
          <Card key={i}>
            <Card.Header>
              <Card.Title><img alt="card-title" src={item.node.owner.profile_pic_url} /> {item.node.owner.username}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={item.node.display_url} />
            <Card.Body>
              <div>
                <img alt="card-icons" src="card-love.png" />
                <img alt="card-icons" src="card-comment.png" />
                <img alt="card-icons" src="card-plane.png" />
                <img alt="card-icons" className="bookmark" src="card-bookmark.png" />
              </div>
              <br />
              <Card.Title><strong>{item.node.edge_media_preview_like.count} suka</strong></Card.Title>
              <Card.Text>
                <strong>{item.node.owner.username} </strong>
                <ReadMoreReact text={item.node.edge_media_to_caption.edges[0].node.text}
                  min={80}
                  ideal={100}
                  max={120}
                  readMoreText={'selengkapnya'} />
              </Card.Text>
              <Card.Subtitle>
                {item.node.taken_at_timestamp} jam yag lalu
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer><FormControl placeholder="😊  Tambahkan komentar" /></Card.Footer>
          </Card>
        )}
      </div>
    )
  }
}

export default Home