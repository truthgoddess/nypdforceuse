import axios from 'axios'
import history from '../history'
import {CommentActions} from 'semantic-ui-react'

/**
 * ACTION TYPES
 */

const SET_COMMAND_OPTIONS = 'SET_COMMAND_OPTIONS'
const SET_TIME_OPTIONS = 'SET_TIME_OPTIONS'
const SET_CURRENT_SELECTIONS = 'SET_CURRENT_SELECTIONS'

/**
 * INITIAL STATE
 */
const defaultGraphOption = {
  timeOptions: [], //need to get from DB
  fullMenuOptions: [
    {key: 'allInjury', text: 'All Injuries', value: 'allInjury'},
    {key: 'subjectInjury', text: 'Subject Injuries', value: 'subjectInjury'},
    {key: 'officerInjury', text: 'Officer Injuries', value: 'officerInjury'},
    {
      key: 'incidentsForceType',
      text: 'Force Types',
      value: 'incidentsForceType',
    },
    {
      key: 'incidentsBasisEncounter',
      text: 'Basis for Encounter',
      value: 'incidentsBasisEncounter',
    },
  ],
  injuryOptions: [
    {key: 'allInjury', text: 'All Injuries', value: 'allInjury'},
    {key: 'subjectInjury', text: 'Subject Injuries', value: 'subjectInjury'},
    {key: 'officerInjury', text: 'Officer Injuries', value: 'officerInjury'},
  ],
  dutyOptions: [
    {key: 'allDuty', text: 'All Duty', value: 'allDuty'},
    {key: 'onDuty', text: 'On Duty', value: 'on'},
    {key: 'offDuty', text: 'Off Duty', value: 'off'},
  ],
  commandOptions: [],
  currentSelections: {
    fullMenuSelection: '',
    timeSelection: '',
    dutySelection: '',
    commandSelection: '',
  },
  //need to get from DB
}

/**
 * ACTION CREATORS
 */

const setCommandOptions = (commands) => ({
  type: SET_COMMAND_OPTIONS,
  commands,
})

const setTimeOptions = (times) => ({
  type: SET_TIME_OPTIONS,
  times,
})

const setCurrentSelection = (selections) => ({
  type: SET_CURRENT_SELECTIONS,
  selections,
})

/**
 * THUNK CREATORS
 */

export const getTimes = () => async (dispatch) => {
  try {
    console.log('running getTimes')
    let times = await axios.get('/api/menuData/timeFrames')
    dispatch(setTimeOptions(times.data))
  } catch (error) {
    console.log(error)
  }
}

export const getCommands = () => async (dispatch) => {
  try {
    console.log('running getCommands')
    let commands = await axios.get('/api/menuData/commands')
    dispatch(setCommandOptions(commands.data))
  } catch (error) {
    console.log(error)
  }
}

export const getSelections = (selections) => async (dispatch) => {
  try {
    console.log('running getSelections')
    dispatch(setCurrentSelection(selections))
  } catch (error) {
    console.log(error)
  }
}

export const putData = (upload) => async () => {
  try {
    let {data} = await axios.post('/api/admin/upload', upload)
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultGraphOption, action) {
  switch (action.type) {
    case SET_COMMAND_OPTIONS:
      return {...state, commandOptions: action.commands}
    case SET_TIME_OPTIONS:
      return {...state, timeOptions: action.times}
    case SET_CURRENT_SELECTIONS:
      return {...state, currentSelections: action.selections}
    default:
      return state
  }
}
