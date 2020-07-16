import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../store'
import {Grid, Dropdown, Button, Form, Select, Item} from 'semantic-ui-react'
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
import LeftNavAllInjuries from './leftNavAllInjuries'
import LeftNavSubjectInjuries from './leftNavSubjectInjuries'
import LeftNavOfficerInjuries from './leftNavOfficerInjuries'
import Welcome from './welcome'

class Intro extends React.Component {
  render() {
    if (
      this.props.currentView.officerData &&
      this.props.currentView.subjectData
    ) {
      if (
        this.props.currentView.officerData.length > 0 &&
        this.props.currentView.subjectData.length > 0
      ) {
        return (
          <Grid
            celled
            padded
            columns={2}
            style={{height: '100vh', margin: '10px'}}
          >
            <Grid.Row textAlign="center">
              <LeftNavAllInjuries />
              <RightNavBar />
            </Grid.Row>
          </Grid>
        )
      } else if (
        this.props.currentView.officerData.length === 0 &&
        this.props.currentView.subjectData.length > 0
      ) {
        return (
          <Grid
            celled
            padded
            columns={2}
            style={{height: '100vh', margin: '10px'}}
          >
            <Grid.Row textAlign="center">
              <LeftNavSubjectInjuries />
              <RightNavBar />
            </Grid.Row>
          </Grid>
        )
      } else if (
        this.props.currentView.officerData.length > 0 &&
        this.props.currentView.subjectData.length === 0
      ) {
        return (
          <Grid
            celled
            padded
            columns={2}
            style={{height: '100vh', margin: '10px'}}
          >
            <Grid.Row textAlign="center">
              <LeftNavOfficerInjuries />
              <RightNavBar />
            </Grid.Row>
          </Grid>
        )
      } else if (
        this.props.currentView.officerData.length === 0 &&
        this.props.currentView.subjectData.length === 0
      ) {
        return (
          <Grid
            celled
            padded
            columns={2}
            style={{height: '100vh', margin: '10px'}}
          >
            <Grid.Row textAlign="center">
              <Grid.Column height="50vh" verticalAlign="middle" width={12}>
                No injuries/force use found!
              </Grid.Column>
              <RightNavBar />
            </Grid.Row>
          </Grid>
        )
      }
    } else {
      return (
        <Grid
          celled
          padded
          columns={2}
          style={{height: '100vh', margin: '10px'}}
        >
          <Grid.Row textAlign="center">
            <Welcome />
            <RightNavBar />
          </Grid.Row>
        </Grid>
      )
    }
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,

    currentView: state.currentView,
  }
}

const mapDispatch = (dispatch) => {
  return {
    // handleClick() {
    //   dispatch(logout())
    // },
    // getTimes: () => dispatch(getTimes()),
    // getCommands: () => dispatch(getCommands()),
    // getData: (path) => dispatch(getData(path)),
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
