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

import {colors, settings, totalInjuries, makeTitle} from '../utility'

class LeftNavSubjectInjuries extends React.Component {
  render() {
    let dataLength =
      this.props.currentView.officerData.length +
      this.props.currentView.subjectData.length
    if (dataLength > settings.renderThreshold) {
      let data = [
        {
          x: 'Physical Injury',
          y: totalInjuries(
            this.props.currentView.subjectData,
            'Physical Injury'
          ),
        },
        {
          x: 'Serious Physical Injury',
          y: totalInjuries(
            this.props.currentView.subjectData,
            'Serious Physical Injury'
          ),
        },
        {
          x: 'Substantial Physical Injury',
          y: totalInjuries(
            this.props.currentView.subjectData,
            'Substantial Physical Injury'
          ),
        },
        {
          x: 'MOS Killed or Shot',
          y: totalInjuries(
            this.props.currentView.subjectData,
            'MOS Killed or Shot'
          ),
        },
      ]

      return (
        <Grid.Column height="50vh" verticalAlign="middle" width={12}>
          <VictoryChart
            style={{
              background: {
                fill: 'F1F8F9',
              },
            }}
            domainPadding={20}
          >
            <VictoryLabel x={25} y={14} text="NYPD Force Use" />
            <VictoryLabel
              style={{
                fontSize: 8,
              }}
              x={25}
              y={34}
              text={makeTitle(this.props.currentSelections)}
            />
            <VictoryAxis independentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryBar
              categories={{
                x: [
                  'Physical Injury',
                  'Serious Physical Injury',
                  'Substantial Physical Injury',
                ],
              }}
              key="singleLeftNav"
              data={data}
              barWidth={10}
              style={{
                data: {fill: colors[3], stroke: 'white', strokeWidth: 0.15},
              }}
              labels={({datum}) => datum.y}
              labelComponent={<VictoryLabel dy={-2} style={{fontSize: 5}} />}
            ></VictoryBar>
          </VictoryChart>
        </Grid.Column>
      )
    } else {
      this.props.currentView.subjectData.forEach((item) => {
        console.log(item)
      })
      console.log('subjectData', this.props.currentView.subjectData)
      return (
        <Grid.Column height="50vh" verticalAlign="middle" width={12}>
          <VictoryChart
            style={{
              background: {fill: 'F1F8F9'},
            }}
            domainPadding={20}
          >
            <VictoryLabel x={25} y={14} text="NYPD Force Use" />
            <VictoryLabel
              style={{
                fontSize: 8,
              }}
              x={25}
              y={34}
              text={makeTitle(this.props.currentSelections)}
            />
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
    currentSelections: state.graphOption.currentSelections,
  }
}

export default connect(mapState)(LeftNavSubjectInjuries)
