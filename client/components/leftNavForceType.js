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

class LeftNavForceType extends React.Component {
  render() {
    return (
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <VictoryChart
          style={{
            background: {fill: '#adcfd6'},
          }}
          padding={{top: 60, bottom: 20, left: 150, right: 50}}
          horizontal
          domainPadding={20}
        >
          <VictoryLabel x={25} y={14} text="NYPD Force Use" />
          <VictoryLabel x={25} y={34} text="Force Types" />
          <VictoryAxis independentAxis style={{tickLabels: {fontSize: 8}}} />
          <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
          <VictoryStack colorScale={colors}>
            {this.props.currentView.forceTypeData.map((item) => (
              <VictoryBar
                categories={{
                  x: [
                    'Physical Force',
                    'Electrical Weapon',
                    'Impact Weapon',
                    'Firearm',
                    'OC Spray',
                    'Restraining Mesh Blanket',
                    'Police Canine',
                  ],
                }}
                key={item.id}
                data={[
                  {
                    x: item.forceCategory.type,
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

export default connect(mapState)(LeftNavForceType)
