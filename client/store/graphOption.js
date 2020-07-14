import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const SET_CURRENT_SELECTION = 'SET_CURRENT_SELECTION'

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
    {key: 'offDuty', text: 'Off Duty', value: 'offDuty'},
    {key: 'onDuty', text: 'On Duty', value: 'onDuty'},
  ],
  commandOptions: [],
  currentSelection: {
    fullMenuOption: '',
    yearOption: '',
    injuryOption: '',
    dutyOption: '',
  }, //need to get from DB
}

/**
 * ACTION CREATORS
 */

const setCurrentSelection = (selection) => ({
  type: SET_CURRENT_SELECTION,
  selection,
})

/**
 * THUNK CREATORS
 */

export const putSelection = (selection) => async (dispatch) => {
  try {
    dispatch(setCurrentSelection(selection))
  } catch (error) {
    console.log(error)
  }
}
/**
 * REDUCER
 */
export default function (state = defaultGraphOption, action) {
  switch (action.type) {
    case SET_CURRENT_SELECTION:
      return {...state, currentSelection: action.selection}
    default:
      return state
  }
}
