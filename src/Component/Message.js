import React, { Component } from 'react';
import { Button, Container, Row, Table, Modal, Form, FormControl } from "react-bootstrap";
import MainTemplate from '../MainTemplate';
import axios from 'axios'
import { connect } from "react-redux";


const API_URL = process.env.REACT_APP_API_URL
class Message extends Component {

  state = {
    comments: [],
    show: false,
    index: undefined,
    id: undefined
  }

  componentDidMount() {
    axios.get(API_URL + "/comments")
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }

  toggle = (param, index) => {
    this.setState({ show: param })
    if (param === true) {
      this.setState({ index: index })
    } else if (param === false) {
      this.setState({ index: undefined })
    }
  }

  delete = (id) => {
    axios.delete(API_URL + "/comments/" + id)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
  }

  create = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      body: e.target.comments.value,
    };
    axios.post(API_URL + `/comments`, data)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
          this.setState({ show: false });
        }))
  }

  update = (e, id) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      body: e.target.comments.value,
      postId: 1
    };
    axios.put(API_URL + "/comments/" + id, data)
      .then(axios.get(API_URL + "/comments")
        .then(res => {
          const comments = res.data;
          this.setState({ comments });
        }))
    this.setState({ show: false });
  }

  render() {
    console.log("message");
    return (
      <MainTemplate>
        <Container className="template" style={{ backgroundColor: this.props.background }}>
          <br />
          <Row>
            <CreateUpdate comments={this.state.comments} index={this.state.index} show={this.state.show} update={this.update} create={this.create} toggle={this.toggle} />
            <Button variant={this.props.background === "black" ? "dark" : "primary"} onClick={e => this.toggle(true)} className="ml-3">Add</Button>
          </Row>
          <br />
          <Row className="body" style={{ backgroundColor: this.props.background }}>
            <Table striped bordered hover variant={this.props.background === "black" ? "dark" : "light"}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comments</th>
                  <th>Id</th>
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
                      <td>{item.id}</td>
                      <td><Button variant={this.props.background === "black" ? "dark" : "primary"} onClick={e => this.delete(item.id)}>Delete</Button></td>
                      <td><Button variant={this.props.background === "black" ? "dark" : "primary"} onClick={e => this.toggle(true, i, item.id)}>Update</Button></td>
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

class CreateUpdate extends Component {
  render() {
    const { comments, index, show, toggle, update, create } = this.props
    return (
      <Modal
        show={show}
        onHide={e => toggle(false)}
        backdrop="static"
      >
        <Form onSubmit={index !== undefined ? e => update(e, comments[index].id) : e => create(e)}>
          <Modal.Header closeButton>
            <Modal.Title>{index !== undefined ? "Update" : "Create"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>No</Form.Label>
            <FormControl defaultValue={index !== undefined ? index + 1 : comments.length + 1} disabled />
            <Form.Label>Name</Form.Label>
            <FormControl defaultValue={index !== undefined ? comments[index].name : ""} name="name" />
            <Form.Label>Email</Form.Label>
            <FormControl defaultValue={index !== undefined ? comments[index].email : ""} type="email" name="email" />
            <Form.Label>Comments</Form.Label>
            <FormControl defaultValue={index !== undefined ? comments[index].body : ""} name="comments" />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">{index !== undefined ? "Update" : "Create"}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { background: state.background, color: state.color };
};

export default connect(mapStateToProps)(Message);