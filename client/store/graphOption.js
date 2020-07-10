import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

/**
 * INITIAL STATE
 */
const defaultGraphOption = {
  timeOptions: [], //need to get from DB
  injuryOptions: ['subject', 'officer'],
  dutyOptions: ['off', 'on'],
  commandOptions: [], //need to get from DB
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
export default function (state = defaultGraphOption, action) {
  switch (action.type) {
    default:
      return state
  }
}
