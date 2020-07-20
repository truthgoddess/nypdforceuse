import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../store'
import {
  Grid,
  Dropdown,
  Button,
  Form,
  Select,
  Item,
  Radio,
} from 'semantic-ui-react'
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryLabel,
  VictoryTooltip,
  VictoryZoomContainer,
  VictoryAxis,
} from 'victory'

import RightNavBar from './rightNavBar'

class Upload extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.dataType.value)
    console.log(e.target.dataBox.value)
  }

  render() {
    return (
      <Grid celled padded columns={2} style={{height: '100vh', margin: '10px'}}>
        <Grid.Row textAlign="center">
          <Grid.Column height="50vh" verticalAlign="middle" width={12}>
            {
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="dataType">Choose a car:</label>
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
      //   <Grid celled padded columns={2} style={{height: '100vh', margin: '10px'}}>
      //     <Grid.Column height="50vh" verticalAlign="middle" width={12}>
      //       <Grid.Row textAlign="center">
      //         <Form>
      //           <Form.Field>
      //             <label>Data</label>
      //             <input placeholder="First Name" />
      //           </Form.Field>
      //           <Button type="submit">Submit</Button>
      //         </Form>
      //         <RightNavBar />
      //       </Grid.Row>
      //     </Grid.Column>
      //   </Grid>
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
    putData: (data) => dispatch(data),
    // handleClick() {
    //   dispatch(logout())
    // },
    // getTimes: () => dispatch(getTimes()),
    // getCommands: () => dispatch(getCommands()),
    // getData: (path) => dispatch(getData(path)),
  }
}

export default connect(mapState)(Upload)

/**
 * PROP TYPES
 */
Upload.propTypes = {
  //   handleClick: PropTypes.func.isRequired,
  //   isLoggedIn: PropTypes.bool.isRequired
}
