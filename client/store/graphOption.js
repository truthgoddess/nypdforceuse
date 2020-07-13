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
