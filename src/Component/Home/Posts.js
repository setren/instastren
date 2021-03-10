import React, { Component } from 'react';
import { Card, FormControl } from 'react-bootstrap';
import { connect } from "react-redux";


class MoreLess extends Component {
  state = {
    text: "",
    moreorless: "more"
  }
  more() {
    // const paragraph = this.props.text.indexOf("\n")
    // const restText = this.props.text.substring(paragraph)
    this.setState({ text: this.props.text })
    this.setState({ moreorless: "less" })
  }
  less = () => {
    const paragraph = this.props.text.indexOf("\n")
    const displayText = this.props.text.substring(0, paragraph)
    console.log(displayText);
    this.setState({ text: displayText })
    this.setState({ moreorless: "more" })
  }
  componentDidMount() {
    const paragraph = this.props.text.indexOf("\n")
    const displayText = this.props.text.substring(0, paragraph)
    this.setState({ text: displayText })
  }
  render() {
    return (
      <div style={{ whiteSpace: "pre-line" }}>
        { this.state.text}{this.state.moreorless === "more" ? <span onClick={e => this.more()} style={{ cursor: "pointer" }}><b>{"\nread more"}</b></span> : <span onClick={this.less} style={{ cursor: "pointer" }}><b>{"\nread less"}</b></span>}
      </ div>
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
            <Card.Header style={{ backgroundColor: this.props.background }}>
              <Card.Title style={{ color: this.props.color }}><img alt="card-title" src={item.node.owner.profile_pic_url} /> {item.node.owner.username}</Card.Title>
            </Card.Header>
            {item.node.is_video === true ?
              <video src={item.node.video_url} type="video/mp4" poster={item.node.display_url} controls /> :
              <Card.Img variant="top" src={item.node.display_url} />}
            <Card.Body style={{ backgroundColor: this.props.background }}>
              <div>
                <img alt="card-icons" src="card-love.png" />
                <img alt="card-icons" src="card-comment.png" />
                <img alt="card-icons" src="card-plane.png" />
                <img alt="card-icons" className="bookmark" src="card-bookmark.png" />
              </div>
              <br />
              <Card.Title style={{ color: this.props.color }}><strong>{item.node.edge_media_preview_like.count} suka</strong></Card.Title>
              <div className="card-text" style={{ color: this.props.color }}>
                <strong>{item.node.owner.username} </strong>
                <MoreLess
                  text={item.node.edge_media_to_caption.edges[0].node.text}
                />
              </div>
              <br />
              <Card.Subtitle style={{ color: this.props.color }}>
                {item.node.taken_at_timestamp} jam yag lalu
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer><FormControl style={{ backgroundColor: this.props.background }} placeholder="😊  Tambahkan komentar" /></Card.Footer>
          </Card>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};

export default connect(mapStateToProps)(Posts);