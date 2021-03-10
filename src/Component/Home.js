import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import db from "../db.json";
import db1 from "../db1.json";
import db2 from "../db2.json";
import MainTemplate from '../MainTemplate';
import { connect } from "react-redux";
import Posts from "./Home/Posts";


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
      <MainTemplate>
        <Container className="template">
          <Row className="body" style={{ backgroundColor: this.props.background }}>
            <Col sm={8} >
              <Posts data={this.state.data} />
              {this.state.postCount1 === true ? < Posts data={this.state.data1} /> : null}
              {this.state.postCount2 === true ? < Posts data={this.state.data2} /> : null}
            </Col>
            <Col sm={4} >
              <Container className="my-profile">
                <Card className="my-profile" >
                  <Card.Header style={{ backgroundColor: this.props.background }}>
                    <Card.Title style={{ color: this.props.color, fontWeight: "bolder" }}><img alt="card" src={this.state.data.data.user.profile_pic_url} /> {this.state.data.data.user.username}</Card.Title>
                  </Card.Header>
                </Card>
                <p style={{ color: this.props.color }}>Saran untuk anda</p>
                <Card className="people-may-you-know" style={{ backgroundColor: this.props.background }}>
                  <Card.Header style={{ backgroundColor: this.props.background }}>
                    <Card.Title style={{ color: this.props.color, fontWeight: "bolder" }}><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[4].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[4].node.owner.username}</Card.Title>
                  </Card.Header>
                  <Card.Header style={{ backgroundColor: this.props.background }}>
                    <Card.Title style={{ color: this.props.color, fontWeight: "bolder" }}><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[6].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[6].node.owner.username}</Card.Title>
                  </Card.Header>
                  <Card.Header style={{ backgroundColor: this.props.background }}>
                    <Card.Title style={{ color: this.props.color, fontWeight: "bolder" }}><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[8].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[8].node.owner.username}</Card.Title>
                  </Card.Header>
                  <Card.Header style={{ backgroundColor: this.props.background }}>
                    <Card.Title style={{ color: this.props.color, fontWeight: "bolder" }}><img alt="card" src={this.state.data.data.user.edge_web_feed_timeline.edges[10].node.owner.profile_pic_url} /> {this.state.data.data.user.edge_web_feed_timeline.edges[10].node.owner.username}</Card.Title>
                  </Card.Header>
                </Card>
              </Container>
            </Col>
          </Row>
        </Container>
      </MainTemplate>
    )
  }
}


// class Posts extends Component {
//   render() {
//     console.log('posts render')
//     console.log(this.props)
//     return (
//       <div >
//         {this.props.data.data.user.edge_web_feed_timeline.edges.map((item, i) =>
//           <Card key={i}>
//             <Card.Header style={{ backgroundColor: this.props.theme }}>
//               <Card.Title style={{ color: "white" }}><img alt="card-title" src={item.node.owner.profile_pic_url} /> {item.node.owner.username}</Card.Title>
//             </Card.Header>
//             {item.node.is_video === true ?
//               <video src={item.node.video_url} type="video/mp4" poster={item.node.display_url} controls /> :
//               <Card.Img variant="top" src={item.node.display_url} />}
//             <Card.Body style={{ backgroundColor: this.props.theme }}>
//               <div>
//                 <img alt="card-icons" src="card-love.png" />
//                 <img alt="card-icons" src="card-comment.png" />
//                 <img alt="card-icons" src="card-plane.png" />
//                 <img alt="card-icons" className="bookmark" src="card-bookmark.png" />
//               </div>
//               <br />
//               <Card.Title style={{ color: "white" }}><strong>{item.node.edge_media_preview_like.count} suka</strong></Card.Title>
//               <div className="card-text" style={{ color: "white" }}>
//                 <strong>{item.node.owner.username} </strong>
//                 <MoreLess
//                   text={item.node.edge_media_to_caption.edges[0].node.text}
//                 />
//               </div>
//               <br />
//               <Card.Subtitle style={{ color: "white" }}>
//                 {item.node.taken_at_timestamp} jam yag lalu
//               </Card.Subtitle>
//             </Card.Body>
//             <Card.Footer><FormControl style={{ backgroundColor: this.props.theme }} placeholder="😊  Tambahkan komentar" /></Card.Footer>
//           </Card>
//         )}
//       </div>
//     )
//   }
// }


const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};

export default connect(mapStateToProps)(Home);
