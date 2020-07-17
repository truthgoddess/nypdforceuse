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
import {getTimes, getCommands} from '../store/graphOption'
import {getData} from '../store/currentView'

import {colors} from '../utility'

class LeftNavAllInjuries extends React.Component {
  render() {
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <VictoryChart
          style={{
            background: {fill: '#adcfd6'},
          }}
          domainPadding={20}
        >
          <VictoryAxis independentAxis style={{tickLabels: {fontSize: 8}}} />
          <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
          <VictoryStack colorScale={colors}>
            {this.props.currentView.officerData.map((item) => (
              <VictoryBar
                categories={{
                  x: [
                    'Physical Injury',
                    'Serious Physical Injury',
                    'Substantial Physical Injury',
                    'MOS Killed or Shot',
                  ],
                }}
                key={`o${item.id}`}
                data={[
                  {
                    x: item.injuryType.type,
                    y: item.onDuty
                      ? item.onDuty
                      : 0 + item.offDuty
                      ? item.offDuty
                      : 0,
                  },
                ]}
                barWidth={10}
                labels={() =>
                  `${item.timeFrame.year}, Q${item.timeFrame.quarter}, count:${
                    item.onDuty
                      ? item.onDuty
                      : 0 + item.offDuty
                      ? item.offDuty
                      : 0
                  }, ${item.command.commandName}, Officer Injuries`
                }
                labelComponent={
                  <VictoryTooltip
                    flyoutStyle={{fill: 'white'}}
                    style={{fontSize: 5}}
                    flyoutPadding={5}
                  />
                }
              />
            ))}
            {this.props.currentView.subjectData.map((item) => (
              <VictoryBar
                key={`s${item.id}`}
                data={[
                  {
                    x: item.injuryType.type,
                    y: item.onDuty
                      ? item.onDuty
                      : 0 + item.offDuty
                      ? item.offDuty
                      : 0,
                  },
                ]}
                barWidth={10}
                labels={() =>
                  `${item.timeFrame.year}, Q${item.timeFrame.quarter}, count:${
                    item.onDuty
                      ? item.onDuty
                      : 0 + item.offDuty
                      ? item.offDuty
                      : 0
                  }, ${item.command.commandName}, Subject Injuries`
                }
                labelComponent={
                  <VictoryTooltip
                    flyoutStyle={{fill: 'white'}}
                    style={{fontSize: 5}}
                    flyoutPadding={5}
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

export default connect(mapState)(LeftNavAllInjuries)
