import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";
import MainTemplate from '../MainTemplate';

class Activity extends Component {

  render() {
    console.log('activity render')
    return (
      <MainTemplate>
        <Container className="template">
          <Row className="body">
            <MoreLess
              text={"Lockdown memaksa orang-orang untuk tinggal di rumah dan membuat jalanan menjadi sepi. Hal itu menyebabkan #tunawisma yang kehidupannya sangat bergantung dengan orang-orang yang lewat di jalan menjadi kesulitan untuk mendapatkan uang.\n\nSelain itu, jumlah #tempattidur yang tersedia di tempat penampungan juga dikurangi jumlahnya karena harus mengikuti peraturan pembatasan sosial, bahkan sampai setengahnya. Untuk membantu mengatasi masalah ini, beberapa #hotel di #Berlin membuka pintunya untuk memberikan tempat tidur bagi para tunawisma.\n\nHal tersebut membuat tunawisma tidak perlu berbagi kamar di tempat penampungan, tapi juga tidak perlu tidur di jalan. Sehingga mereka dapat terlindungi dari cuaca musim dingin yang kurang bersahabat.\n\nSkema bantuan ini tidak merugikan bagi pihak hotel. Pemerintah kota Berlin memberikan kompensasi bagi hotel yang menyediakan tempat tidur mereka untuk para tunawisma. Semuanya mendapat untung. Tunawisma mendapatkan tempat tinggal dan makanan, hotel tetap dapat pemasukan dan pemerintah dapat mengatasi masalah sosial tersebut setidaknya untuk sementara.\n\nArticle : KumparanCom\nPhoto : Unsplash/Nathan Dumlao\n\n©All Rights and Credits Reserved To The Respective Owner(s). Please Contact Us For Credit or Removal"}
            />
          </Row>
        </Container>
      </MainTemplate >
    )
  }
}

class MoreLess extends Component {
  state = {
    text: "",
    moreorless: "more"
  }
  more() {
    const paragraph = this.props.text.indexOf("\n")
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

export default Activity