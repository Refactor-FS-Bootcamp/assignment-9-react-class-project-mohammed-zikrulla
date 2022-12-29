import React, { Component } from 'react'
import { userContext } from './UserContext'

export class child extends Component {
 
  static contextType=userContext

  render() {
    return (
      <div>child welcomes {this.context}</div>
    )
  }
}

export default child