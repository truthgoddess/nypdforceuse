import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Intro = () => (
  <div>
    <h1>LET ME TELL YOU ABOUT THIS APP</h1>
  </div>
)

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Intro)

/**
 * PROP TYPES
 */
Intro.propTypes = {
  //   handleClick: PropTypes.func.isRequired,
  //   isLoggedIn: PropTypes.bool.isRequired
}
