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

import {colors, settings, totalIncidentsBasisEncounter} from '../utility'
class LeftNavIncidentsBasisEncounter extends React.Component {
  render() {
    let dataLength = this.props.currentView.incidentBasisEncounterData.length
    if (dataLength > settings.renderThreshold) {
      let data = [
        {
          x: 'HOSTAGE/BARRICADED',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'HOSTAGE/BARRICADED'
          ),
        },
        {
          x: 'ANIMAL CONDITION',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'ANIMAL CONDITION'
          ),
        },
        {
          x: 'IN CUSTODY INJURY',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'IN CUSTODY INJURY'
          ),
        },
        {
          x: 'SEARCH WARRANT',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'SEARCH WARRANT'
          ),
        },
        {
          x: 'AMBUSH OF MEMBER',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'AMBUSH OF MEMBER'
          ),
        },
        {
          x: 'HOME VISIT',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'HOME VISIT'
          ),
        },
        {
          x: 'TRANSIT EJECTION',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'TRANSIT EJECTION'
          ),
        },
        {
          x: 'NON-CRIME CALLS FOR SERVICE',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'NON-CRIME CALLS FOR SERVICE'
          ),
        },
        {
          x: 'ORDER OF PROTECTION',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'ORDER OF PROTECTION'
          ),
        },
        {
          x: 'SUSPICIOUS ACTIVITY',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'SUSPICIOUS ACTIVITY'
          ),
        },
        {
          x: 'DETECTIVE INVESTIGATION',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'DETECTIVE INVESTIGATION'
          ),
        },
        {
          x: 'CROWD CONTROL',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'CROWD CONTROL'
          ),
        },
        {
          x: 'VTL INFRACTION',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'VTL INFRACTION'
          ),
        },
        {
          x: 'PAST CRIME/VIOLATION',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'PAST CRIME/VIOLATION'
          ),
        },
        {
          x: 'OTHER',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'OTHER'
          ),
        },
        {
          x: 'WANTED SUSPECT (E.G. WARRANT, I CARD)',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'WANTED SUSPECT (E.G. WARRANT, I CARD)'
          ),
        },
        {
          x: 'CRIME/VIOLATION IN PROGRESS',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'CRIME/VIOLATION IN PROGRESS'
          ),
        },
        {
          x: 'PRISONER',
          y: totalIncidentsBasisEncounter(
            this.props.currentView.incidentsBasisEncounterData,
            'PRISONER'
          ),
        },
      ]
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
            <VictoryLabel x={25} y={34} text="Incidents Basis for Encounter" />
            <VictoryAxis independentAxis style={{tickLabels: {fontSize: 5}}} />
            <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryBar
              categories={{
                x: [
                  'HOSTAGE/BARRICADED',
                  'ANIMAL CONDITION',
                  'IN CUSTODY INJURY',
                  'SEARCH WARRANT',
                  'AMBUSH OF MEMBER',
                  'HOME VISIT',
                  'TRANSIT EJECTION',
                  'NON-CRIME CALLS FOR SERVICE',
                  'ORDER OF PROTECTION',
                  'SUSPICIOUS ACTIVITY',
                  'DETECTIVE INVESTIGATION',
                  'CROWD CONTROL',
                  'VTL INFRACTION',
                  'PAST CRIME/VIOLATION',
                  'OTHER',
                  'WANTED SUSPECT (E.G. WARRANT, I CARD)',
                  'CRIME/VIOLATION IN PROGRESS',
                  'PRISONER',
                ],
              }}
              data={data}
              barWidth={2}
              style={{
                data: {fill: colors[3], stroke: 'white', strokeWidth: 0.15},
              }}
              labels={({datum}) => datum.y}
              labelComponent={
                <VictoryTooltip
                  flyoutStyle={{fill: 'white'}}
                  style={{fontSize: 5}}
                  flyoutPadding={5}
                />
              }
            ></VictoryBar>
            {/* <VictoryStack colorScale={colors}>
              {this.props.currentView.incidentBasisEncounterData.map((item) => (
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
                      x: item.encounterCategory.type,
                      y: item.count ? item.count : 0,
                    },
                  ]}
                  barWidth={10}
                  labels={() =>
                    `${item.timeFrame.year}, Q${
                      item.timeFrame.quarter
                    }, count:${item.count ? item.count : 0}`
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
            padding={{top: 60, bottom: 20, left: 150, right: 50}}
            horizontal
            domainPadding={20}
          >
            <VictoryLabel x={25} y={14} text="NYPD Force Use" />
            <VictoryLabel x={25} y={34} text="Incidents Basis for Encounter" />
            <VictoryAxis independentAxis style={{tickLabels: {fontSize: 5}}} />
            <VictoryAxis dependentAxis style={{tickLabels: {fontSize: 8}}} />
            <VictoryStack colorScale={colors}>
              {this.props.currentView.incidentBasisEncounterData.map((item) => (
                <VictoryBar
                  categories={{
                    x: [
                      'HOSTAGE/BARRICADED',
                      'ANIMAL CONDITION',
                      'IN CUSTODY INJURY',
                      'SEARCH WARRANT',
                      'AMBUSH OF MEMBER',
                      'HOME VISIT',
                      'TRANSIT EJECTION',
                      'NON-CRIME CALLS FOR SERVICE',
                      'ORDER OF PROTECTION',
                      'SUSPICIOUS ACTIVITY',
                      'DETECTIVE INVESTIGATION',
                      'CROWD CONTROL',
                      'VTL INFRACTION',
                      'PAST CRIME/VIOLATION',
                      'OTHER',
                      'WANTED SUSPECT (E.G. WARRANT, I CARD)',
                      'CRIME/VIOLATION IN PROGRESS',
                      'PRISONER',
                    ],
                  }}
                  key={item.id}
                  data={[
                    {
                      x: item.encounterCategory.type,
                      y: item.count ? item.count : 0,
                    },
                  ]}
                  barWidth={7}
                  labels={() =>
                    `${item.timeFrame.year}, Q${
                      item.timeFrame.quarter
                    }, count:${item.count ? item.count : 0}`
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
}

const mapState = (state) => {
  return {
    currentView: state.currentView,
  }
}

export default connect(mapState)(LeftNavIncidentsBasisEncounter)
