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

class LeftNavSubjectInjuries extends React.Component {
  render() {
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <VictoryChart
          style={{
            background: {fill: '#adcfd6'},
          }}
          domainPadding={20}
        >
          <VictoryLabel x={25} y={14} text="NYPD Force Use" />
          <VictoryLabel x={25} y={34} text="Subject Injuries" />
          <VictoryAxis independentAxis style={{tickLabels: {fontSize: 10}}} />
          <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 10}}} />
          <VictoryStack colorScale={colors}>
            {this.props.currentView.subjectData.map((item) => (
              <VictoryBar
                categories={{
                  x: [
                    'Physical Injury',
                    'Serious Physical Injury',
                    'Substantial Physical Injury',
                  ],
                }}
                key={item.id}
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
                  }, ${item.command.commandName}`
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

export default connect(mapState)(LeftNavSubjectInjuries)
