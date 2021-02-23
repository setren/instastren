import React, { Component } from 'react';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import Template from '../Templates/Template';
import db from "../ardb.json";
import db1 from "../ardb1.json";
import db2 from "../ardb2.json";

const url = "https://www.instagram.com/explore/grid/?is_prefetch=false&omit_cover_media=false&module=explore_popular&use_sectional_payload=true&cluster_id=explore_all%3A0&include_fixed_destinations=true"

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
    const result = await axios.get(url)
    console.log(result)
    // try {
    //   // const result = await axios.get(url, {
    //   //   withCredentials: true,
    //   //   // headers: { Cookie: document.cookie },
    //   // })
    //   // console.log(result)
    //   const options = {
    //     method: "GET",
    //     // credentials: "include",
    //     // headers: new Headers({ 'Cookie': cookie }),
    //     mode: 'no-cors'
    //   };
    //   fetch(url, options).then(async data => {
    //     const asd = await data.json()
    //     console.log(asd)
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
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
    console.log(window)
    return (
      <Template >
        <Posts data={this.state.data} />
        {this.state.postCount1 === true ? < Posts data={this.state.data1} /> : null}
        {this.state.postCount2 === true ? < Posts data={this.state.data2} /> : null}
      </Template >
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