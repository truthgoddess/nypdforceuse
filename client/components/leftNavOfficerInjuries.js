import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../store'
import {Grid} from 'semantic-ui-react'
import {
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryLabel,
  VictoryTooltip,
  VictoryAxis,
} from 'victory'

import {colors, totalInjuries} from '../utility'

class LeftNavOfficerInjuries extends React.Component {
  render() {
    let dataLength =
      this.props.currentView.officerData.length +
      this.props.currentView.subjectData.length
    console.log('dataLength', dataLength)
    if (dataLength > 200) {
      let data = [
        {
          x: 'Physical Injury',
          y: totalInjuries(
            this.props.currentView.officerData,
            'Physical Injury'
          ),
        },
        {
          x: 'Serious Physical Injury',
          y: totalInjuries(
            this.props.currentView.officerData,
            'Serious Physical Injury'
          ),
        },
        {
          x: 'Substantial Physical Injury',
          y: totalInjuries(
            this.props.currentView.officerData,
            'Substantial Physical Injury'
          ),
        },
        {
          x: 'MOS Killed or Shot',
          y: totalInjuries(
            this.props.currentView.officerData,
            'MOS Killed or Shot'
          ),
        },
      ]

      console.log('more than 200 data', 'data touse', data)
      return (
        <Grid.Column height="50vh" verticalAlign="middle" width={12}>
          <VictoryChart
            style={{
              background: {fill: '#adcfd6'},
            }}
            domainPadding={20}
          >
            <VictoryLabel x={25} y={14} text="NYPD Force Use" />
            <VictoryLabel x={25} y={34} text="Officer Injuries" />
            <VictoryAxis independentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryBar
              categories={{
                x: [
                  'Physical Injury',
                  'Serious Physical Injury',
                  'Substantial Physical Injury',
                  'MOS Killed or Shot',
                ],
              }}
              // key={item.id}
              data={data}
              barWidth={10}
              // labels={() =>
              //   `${item.timeFrame.year}, Q${item.timeFrame.quarter}, count:${
              //     item.onDuty
              //       ? item.onDuty
              //       : 0 + item.offDuty
              //       ? item.offDuty
              //       : 0
              //   }, ${item.command.commandName}`
              // }
              // labelComponent={
              //   <VictoryTooltip
              //     flyoutStyle={{fill: 'white'}}
              //     style={{fontSize: 5}}
              //     flyoutPadding={5}
              //   />
              // }
            ></VictoryBar>

            {/* <VictoryStack colorScale={colors}>
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
                    `${item.timeFrame.year}, Q${
                      item.timeFrame.quarter
                    }, count:${
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
            </VictoryStack> */}
          </VictoryChart>
        </Grid.Column>
      )
    } else {
      return (
        <Grid.Column height="50vh" verticalAlign="middle" width={12}>
          <VictoryChart
            style={{
              background: {fill: '#adcfd6'},
            }}
            domainPadding={20}
          >
            <VictoryLabel x={25} y={14} text="NYPD Force Use" />
            <VictoryLabel x={25} y={34} text="Officer Injuries" />
            <VictoryAxis independentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryBar />
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
                    `${item.timeFrame.year}, Q${
                      item.timeFrame.quarter
                    }, count:${
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
}

const mapState = (state) => {
  return {
    currentView: state.currentView,
  }
}

export default connect(mapState)(LeftNavOfficerInjuries)
