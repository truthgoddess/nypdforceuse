import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_GRAPH_DATA = 'SET_GRAPH_DATA'
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
const setGraphData = (data) => ({
  type: SET_GRAPH_DATA,
  data,
})
/**
 * THUNK CREATORS
 */
export const getData = (path) => async (dispatch) => {
  try {
    console.log(path)
    let {data} = await axios.get(path)
    dispatch(setGraphData(data))
  } catch (error) {
    console.log(error)
  }
}
/**
 * REDUCER
 */
export default function (state = defaultCurrentView, action) {
  switch (action.type) {
    case SET_GRAPH_DATA:
      return action.data
    default:
      return state
  }
}
