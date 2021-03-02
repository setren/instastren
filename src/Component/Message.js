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
  crudCreate = (e) => {
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
  crudDelete = (id) => {
    axios.delete("http://localhost:3000/comments/" + id)
      .then(axios.get("http://localhost:3000/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
    this.setState({ showAlert: false })
  }
  componentDidMount() {
    axios.get("http://localhost:3000/comments")
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }
  alertHandleOpen = (item) => {
    this.setState({ showAlert: true })
    this.setState({ indexAlert: item })
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
            <Dialog show={this.state.show} handleOpen={this.handleOpen} handleClose={this.handleClose} crudCreate={this.crudCreate} />
            <Button onClick={this.handleOpen} className="ml-3" variant="secondary">Add</Button>
          </Row>
          <br />
          <Row className="body">
            <Table striped bordered hover>
              <Alert index={this.state.indexAlert} show={this.state.showAlert} crudDelete={this.crudDelete} handleOpen={this.alertHandleOpen} handleClose={this.alertHandleClose} />
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
                  <tbody key={item.id}>
                    <tr onClick={e => this.alertHandleOpen(item.id)}>
                      <td>{i + 1}</td>
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
      >
        <Form onSubmit={e => this.props.crudCreate(e)}>
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
          <Button onClick={e => this.props.crudDelete(this.props.index)} variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Message