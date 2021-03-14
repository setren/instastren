import React, { Component } from 'react';
import { Button, Container, Row, Table, Modal, Form, FormControl } from "react-bootstrap";
import MainTemplate from '../MainTemplate';
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
class Message extends Component {
  state = {
    comments: [],
    show: false,
    showAlert: false,
    indexAlert: null,
    action: "",
  }
  componentDidMount() {
    axios.get(API_URL + "/comments")
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
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
    axios.post(API_URL + `/comments`, data)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
    // WARNING COOKING HAZARD
    // this.state.comments.push(data)
    // this.setState({ action: "axios.post" })
  }
  crudDelete = (i, id) => {
    axios.delete(API_URL + "/comments/" + id)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
    // WARNING COOKING HAZARD
    // this.state.comments.splice(i, 1)
    // this.setState({ action: "axios.delete" })
  }
  alertHandleOpen = (i) => {
    this.setState({ showAlert: true })
    this.setState({ indexAlert: i })
  }
  alertHandleClose = () => {
    this.setState({ showAlert: false })
  }
  render() {
    console.log("message");
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
              {this.state.indexAlert === null ? null : <Alert comments={this.state.comments} index={this.state.indexAlert} show={this.state.showAlert} handleOpen={this.alertHandleOpen} handleClose={this.alertHandleClose} />}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comments</th>
                  {/* <th>Id</th> */}
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.comments.map((item, i) =>
                    <tr key={i} >
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.body}</td>
                      {/* <td>{item.id}</td> */}
                      <td><Button onClick={e => this.crudDelete(i, item.id)}>Delete</Button></td>
                      <td><Button onClick={e => this.alertHandleOpen(i)}>Update</Button></td>
                    </tr>
                  )}
              </tbody>
            </Table>
          </Row>
        </Container>
      </MainTemplate>
    )
  }
}

class Dialog extends Component {
  render() {
    console.log("dialog");
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
    console.log("alert");
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        backdrop="static"
      >
        <Form onSubmit={e => this.props.crudUpdate()}>
          <Modal.Header closeButton>
            <Modal.Title>Updating and Deleting Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>No</Form.Label>
            <FormControl defaultValue={this.props.index + 1} disabled />
            <Form.Label>Name</Form.Label>
            <FormControl defaultValue={this.props.comments[this.props.index].name} name="name" />
            <Form.Label>Email</Form.Label>
            <FormControl defaultValue={this.props.comments[this.props.index].email} type="email" name="email" />
            <Form.Label>Comments</Form.Label>
            <FormControl defaultValue={this.props.comments[this.props.index].body} name="comments" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Update
              </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

export default Message