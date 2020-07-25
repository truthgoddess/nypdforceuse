import React from 'react'

import {connect} from 'react-redux'

import {Grid} from 'semantic-ui-react'

import RightNavBar from './rightNavBar'
import LeftNavAllInjuries from './leftNavAllInjuries'
import LeftNavSubjectInjuries from './leftNavSubjectInjuries'
import LeftNavOfficerInjuries from './leftNavOfficerInjuries'
import Welcome from './welcome'
import LeftNavForceType from './leftNavForceType'
import LeftNavIncidentsBasisEncounter from './leftNavIncidentsBasisEncounter'

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
    } else if (this.props.currentView.forceTypeData) {
      return (
        <Grid
          celled
          padded
          columns={2}
          style={{height: '100vh', margin: '10px'}}
        >
          <Grid.Row textAlign="center">
            <LeftNavForceType />
            <RightNavBar />
          </Grid.Row>
        </Grid>
      )
    } else if (this.props.currentView.incidentBasisEncounterData) {
      return (
        <Grid
          celled
          padded
          columns={2}
          style={{height: '100vh', margin: '10px'}}
        >
          <Grid.Row textAlign="center">
            <LeftNavIncidentsBasisEncounter />
            <RightNavBar />
          </Grid.Row>
        </Grid>
      )
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

export default connect(mapState)(Intro)

/**
 * PROP TYPES
 */
