import React, { Component } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default class MainTemplate extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        {this.props.children}
        <PageFooter />
      </div>
    )
  }
}
