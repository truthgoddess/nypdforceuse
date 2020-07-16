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
  Container,
  Header,
} from 'semantic-ui-react'

class Welcome extends React.Component {
  render() {
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <Container verticalAlign="middle" text>
          <Header as="h2">NYPD Force Use Data Display and Provider</Header>

          <p>
            THE NYPD BY LAW HAS TO MAKE AVAILABLE PUBLICLY ALL TYPES OF THINGS.
            THEY DO THE BARE MINIMUM, FIND WAYS TO RESTRICT ACCESS, AND MAKE
            THEIR DATA UNMANAGABLE.
          </p>
          <p>
            THIS APPLICATION DISPLAYS NYPD USE OF FORCE DATA (ORIGINAL DATA
            AVAILABLE ON{' '}
            <a href="https://www1.nyc.gov/site/nypd/stats/reports-analysis/use-of-force.page">
              THIS WEBSITE
            </a>
            ) IN A MANNER THAT HELPS IT MAKE SENSE. SIMPLY SELECT A VIEW ABOVE
            AND THEN CHOOSE THE OPTIONS ON THE RIGHT.
          </p>
          <p>
            YOU CAN ALSO COPY THE DATA (JSON FORMAT) USED FOR THAT VIEW BY
            PRESSING THE BUTTON PROVIDED ONCE A VIEW IS SELECTED OR GET A JPEG
            OF THE GRAPH BY CLICKING THAT BUTTON.
          </p>
          <p>
            HOPEFULLY, THIS WILL AID IN EFFORTS TO MAKE THE NYPD HAVE
            TRANSPARENCY LIKE OTHER NYC AGENCIES. PLEASE BE AWARE THAT THIS DATA
            WAS PROVIDED ON THE WEBSITE ABOVE, AND DISPLAYS OF THIS DATA DOES
            NOT SPEAK TO ITS ACCURACY. THAT QUESTION IS LEFT TO OTHERS.
          </p>
        </Container>
      </Grid.Column>
    )
  }
}

const mapState = (state) => {
  return {
    currentView: state.currentView,
  }
}

export default connect(mapState)(Welcome)
