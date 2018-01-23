import React, { Component } from 'react';
import  PropTypes from 'prop-types';

class Geolocation extends Component {
  constructor (props) {
    super (props)

    this.state = {
      fetchingPosition: false,
      position: undefined,
      error: undefined
    }
  }

  componentWillMount () {
    if (typeof window !== 'object') {
      return
    }

    if (!('geolocation' in window.navigator)) {
      return
    }

    if (this.props.lazy) {
      return
    }

    this.getCurrentPosition()
  }

  componentWillUnmount () {
    this.willUnmount = true
  }

  getCurrentPosition = () = => {
    const {
      enableHighAccuracy,
      timeout,
      onSuccess,
      onError
    } = this.props

    this.setState({ fetchingPosition : true})

    return window.navigator.geolocation.getCurrentPosition(
      position => {
        if(this.willUnmount) return

        this.setState({ position, fetchingPosition: false }, () =>
          onSuccess(position)
        )
      },
      err => {
        if(this.willUnmount) return

        this.setState({err, fetchingPosition: false }, () => onError(err))
      },
      { enableHighAccuracy, timeout }
    )
  }

  render() {
    if (!this.props.render) {
      return null
    }

    return(
      this.props.render({
        getCurrentPosition: this.getCurrentPosition,
        fetchingPosition: this.state.fetchingPosition,
        position: this.state.position,
        error: this.state.error
      }) || null
    )
  }
}

Geolocation.propTypes = {
  enableHighAccuracy: Proptypes.bool,
  timeout: Proptypes.number,
  onSuccess: Proptypes.func,
  onError: Proptypes.func,
  lazy: Proptypes.bool
}

Geolocation.defaultProps = {
  enableHighAccuracy: false,
  timeout: Infinity,
  onSuccess: pos => {},
  onError: err => {},
  lazy: false
}

export default Geolocation;