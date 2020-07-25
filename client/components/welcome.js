import React from 'react'

import {connect} from 'react-redux'

import {Grid, Container, Header} from 'semantic-ui-react'

class Welcome extends React.Component {
  render() {
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <Container text>
          <Header as="h2">NYPD Force Use Data Display and Provider</Header>

          <p>
            THIS APPLICATION DISPLAYS NYPD USE OF FORCE DATA (ORIGINAL DATA
            AVAILABLE ON{' '}
            <a href="https://www1.nyc.gov/site/nypd/stats/reports-analysis/use-of-force.page">
              THIS WEBSITE
            </a>
            ) IN A MANNER THAT HELPS IT MAKE SENSE. SIMPLY SELECT OPTIONS FROM
            THE DROP DOWN MENUS AND CLICK GET CHART.
          </p>
          <p>
            YOU CAN ALSO COPY THE DATA (JSON FORMAT) USED FOR THAT VIEW BY
            PRESSING THE BUTTON PROVIDED ONCE A VIEW IS SELECTED. ALSO FEEL FREE
            TO SCREENSHOT THE GRAPHS FOR USE IN RESEARCH OR REPORTING.
          </p>
          <p>
            HOPEFULLY, THIS WILL AID IN EFFORTS TO MAKE THE NYPD HAVE
            TRANSPARENCY LIKE OTHER NYC AGENCIES. PLEASE BE AWARE THAT THIS DATA
            WAS PROVIDED BY THE NYPD AND HAS NOT BEEN ALTERED (ONLY REARRANGED).
            THE DISPLAY OF THIS DATA DOES NOT SPEAK TO ITS ACCURACY. PLEASE
            SELECT ALL FIELDS BEFORE GETTING CHART.
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
