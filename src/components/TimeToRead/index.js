import React, { Component } from 'react'
import './index.css'

class TimeToRead extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeToRead: 0,
      timeRemaining: 0,
      showRemainingLabel: false
    }
    this.scrollListener = null
    this.scrolling = false
    this.el = null
  }

  componentWillMount() {
    this.setState({
      timeToRead: this.props.timeToRead,
      timeRemaining: this.props.timeToRead
    })
  }

  componentDidMount() {
    this.scrollListener = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  throttleScroll () {
    if (this.scrolling) return
    this.scrolling = true
    window.requestAnimationFrame(this.handleScroll)
  }

  handleScroll () {
    const percentatgeRemaining = 1 - (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight))
    const timeRemaining = Math.ceil(this.state.timeToRead * percentatgeRemaining)

    // Only set the state if the time remaining has changed to avoid unnecessary renders
    if (timeRemaining !== this.state.timeRemaining) {
      const showRemainingLabel = timeRemaining < this.state.timeToRead
      this.setState({
        timeRemaining,
        showRemainingLabel
      })
    }
    this.scrolling = false
  }

  render () {
    const plural = this.state.timeRemaining !== 1 ? 's' : ''
    const remaining = this.state.showRemainingLabel ? ' remaining' : ''
    return (
      <p className="time-to-read" ref={(el) => {this.el = el}}>
        Time to read: {this.state.timeRemaining} minute{plural}{remaining}
      </p>
    )
  }
}

export default TimeToRead