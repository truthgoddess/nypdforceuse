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

import {colors} from '../utility'

class LeftNavIncidentsBasisEncounter extends React.Component {
  render() {
    console.log(
      'trying to render',
      this.props.currentView.incidentBasisEncounterData
    )
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <VictoryChart domainPadding={20}>
          <VictoryAxis independentAxis style={{tickLabels: {fontSize: 10}}} />
          <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 10}}} />
          <VictoryStack colorScale={colors}>
            {this.props.currentView.incidentBasisEncounterData.map((item) => (
              <VictoryBar
                key={item.id}
                data={[
                  {
                    x: item.encounterCategory.type,
                    y: item.count ? item.count : 0,
                  },
                ]}
                labels={() =>
                  `${item.timeFrame.year}, Q${item.timeFrame.quarter}`
                }
                labelComponent={<VictoryTooltip flyoutWidth={90} />}
              />
            ))}
          </VictoryStack>
        </VictoryChart>
      </Grid.Column>
    )
  }
}

const mapState = (state) => {
  return {
    currentView: state.currentView,
  }
}

export default connect(mapState)(LeftNavIncidentsBasisEncounter)
