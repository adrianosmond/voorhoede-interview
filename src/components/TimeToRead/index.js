import React, { Component } from 'react'
import './index.css'

const STICKY_WIDTH = 600;

class TimeToRead extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timeToRead: 0,
      timeRemaining: 0,
      showRemainingLabel: false
    }
    this.listeningForScrolls = false;
    this.scrollListener = null
    this.scrolling = false
    this.resizing = false
    this.el = null
  }

  componentWillMount() {
    this.setInitialState()
  }

  componentDidMount() {
    this.resizeListener = this.throttleResize.bind(this)
    window.addEventListener('resize', this.resizeListener)

    this.scrollListener = this.throttleScroll.bind(this)
    // Decide whether we should be listening for scroll events
    // based on the width of the component
    this.throttleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('resize', this.resizeListener)
  }

  setInitialState() {
    this.setState({
      timeToRead: this.props.timeToRead,
      timeRemaining: this.props.timeToRead,
      showRemainingLabel: false
    })
  }

  throttleScroll() {
    if (this.scrolling) return
    this.scrolling = true
    window.requestAnimationFrame(this.handleScroll.bind(this))
  }

  handleScroll() {
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

  throttleResize () {
    if (this.resizing) return
    this.resizing = true
    window.requestAnimationFrame(this.handleResize.bind(this))
  }

  handleResize () {
    if (this.listeningForScrolls && window.innerWidth < STICKY_WIDTH) {
      this.listeningForScrolls = false;
      window.removeEventListener('scroll', this.scrollListener)
      this.setInitialState()
    } else if (!this.listeningForScrolls && window.innerWidth >= STICKY_WIDTH) {
      this.listeningForScrolls = true;
      window.addEventListener('scroll', this.scrollListener)
      // Fake a scroll to make sure we calculate the right data for the current
      // scroll position
      this.throttleScroll()
    }
    this.resizing = false
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