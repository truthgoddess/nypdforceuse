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
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <VictoryChart
          padding={{top: 10, bottom: 20, left: 150, right: 50}}
          horizontal
          domainPadding={20}
        >
          <VictoryAxis independentAxis style={{tickLabels: {fontSize: 5}}} />
          <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
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
                barWidth={10}
                labels={() =>
                  `${item.timeFrame.year}, Q${item.timeFrame.quarter}, count:${
                    item.count ? item.count : 0
                  }`
                }
                labelComponent={
                  <VictoryTooltip
                    flyoutStyle={{fill: 'white'}}
                    style={{fontSize: 5}}
                    flyoutPadding={5}
                    flyoutWidth={90}
                  />
                }
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
