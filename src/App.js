import './App.css';
import { Component } from 'react';
import { Col, Container, Navbar, Row, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Settings from './Component/Settings'
import Home from './Component/Home'
import Message from './Component/Message'
import Arround from './Component/Arround'
import Activity from './Component/Activity'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    console.log('app render')
    return (
      <Router>
        <Container fluid>
          <Row className="custom-header">
            <Container>
              <Row>
                <Col sm={4}>
                  <Navbar>
                    <Link to="/"><img className="image-header" src="logo.png" alt="𝕴𝖓𝖘𝖙𝖆𝖘𝖙𝖗𝖊𝖓"></img></Link>
                  </Navbar>
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                  <Navbar >
                    <Link to="/"><img className="icon-header" src="home.png" ></img></Link>
                    <Link to="/message"><img className="icon-header" src="paper-plane.png" ></img></Link>
                    <Link to="/activity"><img className="icon-header" src="love.png" ></img></Link>
                    <Link to="/arround"><img className="icon-header" src="compass.png" ></img></Link>
                    <Link to="/settings"><img className="icon-header" src="avatar.png" ></img></Link>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/message" component={Message} />
          <Route path="/activity" component={Activity} />
          <Route path="/arround" component={Arround} />
          <Route path="/settings" component={Settings} />
        </Switch >
      </Router >
    )
  }
}

export default App;
