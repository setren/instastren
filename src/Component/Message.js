import React, { Component } from 'react';
import Template from '../Templates/Template';

class Message extends Component {
  render() {
    console.log('message render')
    return (
      <Template>
        message
      </Template>
    )
  }
}

export default Message