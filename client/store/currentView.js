import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

/**
 * INITIAL STATE
 */
const defaultCurrentView = {
  graphType: '',
  data: [],
}

/**
 * ACTION CREATORS
 */

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultCurrentView, action) {
  switch (action.type) {
    default:
      return state
  }
}
