import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Grid} from 'semantic-ui-react'

import RightNavBar from './rightNavBar'

class Upload extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let data = JSON.parse(e.target.dataBox.value)
    let type = e.target.dataType.value
    console.log(type)
    switch (type) {
      case 'subjectInjury':
        axios.post('/api/admin/uploadSubjectInjuries', data)
        break
      case 'officerInjury':
        console.log('in officer injury switch')
        axios.post('/api/admin/uploadOfficerInjuries', data)
        break
      case 'incidentsForceType':
        axios.post('/api/admin/uploadIncidentsForceType', data)
        break
      case 'incidentsBasisEncounter':
        axios.post('/api/admin/uploadIncidentsBasisEncounter', data)
        break
      default:
        console.log('Type Not Detected')
    }
  }

  render() {
    return (
      <Grid celled padded columns={2} style={{height: '100vh', margin: '10px'}}>
        <Grid.Row textAlign="center">
          <Grid.Column height="50vh" verticalAlign="middle" width={12}>
            {
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="dataType">Choose a dataType:</label>
                <select name="dataType" id="dataType">
                  <option value="subjectInjury">subjectInjury</option>
                  <option value="officerInjury">officerInjury</option>
                  <option value="incidentsForceType">incidentsForceType</option>
                  <option value="incidentsBasisEncounter">
                    incidentsBasisEncounter
                  </option>
                </select>
                <br></br>
                <br></br>
                <textarea
                  id="dataBox"
                  name="dataBox"
                  rows="4"
                  cols="50"
                  defaultValue="Input data."
                ></textarea>
                <br></br>
                <br></br>
                <input type="submit" value="Submit"></input>
              </form>
            }
          </Grid.Column>
          <RightNavBar />
        </Grid.Row>
      </Grid>
    )
  }
}
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
    putData: (data, dataType) => dispatch(dataType, data),
  }
}

export default connect(mapState, mapDispatch)(Upload)

/**
 * PROP TYPES
 */
