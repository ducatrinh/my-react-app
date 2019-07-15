import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  render() {
    const names = ["Duc", "Anh", "Trinh"]
    return (
      <div>
        <h1>User Board</h1>
        {names.map((name, i) => <User name={name} key={i} />)}
      </div>
    )}
}