import React, { Component } from 'react';
import { Button, Container, Row, Table, Modal, Form, FormControl } from "react-bootstrap";
import MainTemplate from '../MainTemplate';
import axios from 'axios'

class Message extends Component {
  state = {
    comments: [],
    show: false,
    showAlert: false,
    indexAlert: null
  }
  handleOpen = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      body: e.target.comments.value,
      postId: 1
    };
    axios.post(`http://localhost:3000/comments`, data)
      .then(axios.get("http://localhost:3000/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
  }
  componentDidMount() {
    axios.get("http://localhost:3000/comments")
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }
  alertHandleOpen = (i) => {
    this.setState({ showAlert: true })
    this.setState({ indexAlert: i })
  }
  alertHandleClose = () => {
    this.setState({ showAlert: false })
  }
  render() {
    return (
      <MainTemplate>
        <Container className="template">
          <br />
          <Row>
            <Dialog show={this.state.show} handleOpen={this.handleOpen} handleClose={this.handleClose} onSubmit={this.onSubmit} />
            <Button onClick={this.handleOpen} className="ml-3" variant="secondary">Add</Button>
          </Row>
          <br />
          <Row className="body">
            <Table striped bordered hover>
              <Alert index={this.state.indexAlert} show={this.state.showAlert} handleOpen={this.alertHandleOpen} handleClose={this.alertHandleClose} />
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comments</th>
                </tr>
              </thead>
              {
                this.state.comments.map((item, i) =>
                  <tbody key={i}>
                    <tr onClick={e => this.alertHandleOpen(i)}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.body}</td>
                    </tr>
                  </tbody>
                )}
            </Table>
          </Row>
        </Container>
      </MainTemplate>
    )
  }
}

class Dialog extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={e => this.props.onSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Name</Form.Label>
            <FormControl name="name" />
            <Form.Label>Email</Form.Label>
            <FormControl type="email" name="email" />
            <Form.Label>Comments</Form.Label>
            <FormControl name="comments" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Discard
          </Button>
            <Button type="submit" onClick={this.props.handleClose} variant="primary">Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

class Alert extends Component {
  onDelete = (index) => {
    // Whatever you want to do with that item
    // axios.delete("http://localhost:3000/comments", { params: index })
    //   .then(response => {
    //     console.log(response);
    //   });
    // console.log(this.props.index)
  }
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete this data?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Discard
          </Button>
          <Button onClick={this.onDelete} variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Message