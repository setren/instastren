import { Component } from 'react';
import { Col, Row, Card, FormControl } from 'react-bootstrap';
import Template from '../Templates/Template';
import db from "../db.json";

class Home extends Component {
  state = {
    data: db,
  }
  render() {
    console.log('home render')
    return (
      < Template >
        <Col sm={8}>
          <Posts data={this.state.data} />
        </Col>
        <Col sm={4}>
          <Card className="my-profile">
            <Card.Header>
              <Card.Title><img src={this.state.data[0].data.user.profile_pic_url} /> {this.state.data[0].data.user.username}</Card.Title>
            </Card.Header>
          </Card>
          <p>Saran untuk anda</p>
          <Card className="people-may-you-know">
            <Card.Header>
              <Card.Title><img src={this.state.data[0].data.user.edge_web_feed_timeline.edges[4].node.owner.profile_pic_url} /> {this.state.data[0].data.user.edge_web_feed_timeline.edges[4].node.owner.username}</Card.Title>
            </Card.Header>
            <Card.Header>
              <Card.Title><img src={this.state.data[0].data.user.edge_web_feed_timeline.edges[6].node.owner.profile_pic_url} /> {this.state.data[0].data.user.edge_web_feed_timeline.edges[6].node.owner.username}</Card.Title>
            </Card.Header>
            <Card.Header>
              <Card.Title><img src={this.state.data[0].data.user.edge_web_feed_timeline.edges[8].node.owner.profile_pic_url} /> {this.state.data[0].data.user.edge_web_feed_timeline.edges[8].node.owner.username}</Card.Title>
            </Card.Header>
            <Card.Header>
              <Card.Title><img src={this.state.data[0].data.user.edge_web_feed_timeline.edges[10].node.owner.profile_pic_url} /> {this.state.data[0].data.user.edge_web_feed_timeline.edges[10].node.owner.username}</Card.Title>
            </Card.Header>
          </Card>
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
        {this.props.data.map((item, i) =>
          <Card key={i}>
            <Card.Header>
              <Card.Title><img src={this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.owner.profile_pic_url} /> {this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.owner.username}</Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.display_url} />

            <Card.Body>
              <div>
                <img src="card-love.png" />
                <img src="card-comment.png" />
                <img src="card-plane.png" />
                <img className="bookmark" src="card-bookmark.png" />
              </div>
              <br />
              <Card.Title><strong>{this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.edge_media_preview_like.count} suka</strong></Card.Title>
              <Card.Text>
                <strong>{this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.owner.username} </strong>{this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.edge_media_to_caption.edges[0].node.text}
              </Card.Text>
              <Card.Subtitle>
                {this.props.data[0].data.user.edge_web_feed_timeline.edges[i].node.taken_at_timestamp * 1000} jam yag lalu
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