import React, { Component } from 'react'

export default class Clock extends Component {
    state = { time: new Date() }

    getHours() {
      return this.state.time.getHours()
    }

    getMinutes() {
      return this.state.time.getMinutes()
    }

    getSeconds() {
      return this.state.time.getSeconds()
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick() {
      this.setState({
        time: new Date()
      })
    }

    render() {
      return (
        <div>
          <h2>It is <span>{this.getHours()}</span> : <span>{this.getMinutes()}</span> : <span>{this.getSeconds()}</span></h2>
        </div>
      )
    }
}