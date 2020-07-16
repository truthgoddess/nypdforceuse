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
import {copyToClipboard} from '../utility'

class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      fullMenuSelection: 'Select Graph Type',
      timeSelection: 'Select Time',
      dutySelection: 'Select Duty',
      commandSelection: 'Select Command',
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCopyData = this.handleCopyData.bind(this)
  }

  componentDidMount() {
    this.props.getCommands()
    this.props.getTimes()
  }

  handleDropdownChange = (e, {name, value}) => {
    this.setState({
      [name]: value,
    })
  }

  handleCopyData = (e) => {
    console.log('handleCopyData')
    copyToClipboard(JSON.stringify(this.props.currentView))
  }

  handleSubmit = (e, {value}) => {
    let path
    if (this.state.fullMenuSelection !== 'incidentsBasisEncounter') {
      path = `api/graphData/${this.state.fullMenuSelection}/${this.state.timeSelection}/${this.state.dutySelection}/${this.state.commandSelection}`
    } else {
      path = `api/graphData/${this.state.fullMenuSelection}/${this.state.timeSelection}`
    }

    this.props.getData(path)
  }

  render() {
    return (
      <Grid celled padded columns={2} style={{height: '100vh', margin: '10px'}}>
        <Grid.Row textAlign="center">
          <Grid.Column height="50vh" verticalAlign="middle" width={12}>
            {this.props.currentView.officerData ||
            this.props.currentView.subjectData ? (
              <VictoryChart domainPadding={20}>
                <VictoryAxis
                  independentAxis
                  style={{tickLabels: {fontSize: 10}}}
                />
                <VictoryAxis
                  dependentAxis
                  style={{tickLabels: {fontSize: 10}}}
                />
                <VictoryStack colorScale={['grey', 'black', 'darkblue']}>
                  {this.props.currentView.officerData.length > 0
                    ? this.props.currentView.officerData.map((item) => (
                        <VictoryBar
                          key={item.id}
                          data={[
                            {
                              x: item.injuryType.type,
                              y: item.onDuty + item.offDuty,
                            },
                          ]}
                          labels={() => `${item.command.commandName}`}
                          labelComponent={<VictoryTooltip flyoutWidth={90} />}
                        />
                      ))
                    : ''}
                  {this.props.currentView.subjectData.length > 0
                    ? this.props.currentView.subjectData.map((item) => (
                        <VictoryBar
                          key={item.id}
                          data={[
                            {
                              x: item.injuryType.type,
                              y: item.onDuty + item.offDuty,
                            },
                          ]}
                          labels={() => `${item.command.commandName}`}
                          labelComponent={<VictoryTooltip flyoutWidth={90} />}
                        />
                      ))
                    : ''}
                </VictoryStack>
              </VictoryChart>
            ) : (
              ''
            )}
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid.Row>
              <Dropdown
                fluid
                name="fullMenuSelection"
                selection
                placeholder="Select Chart"
                onChange={this.handleDropdownChange}
                style={{background: 'white'}}
                options={this.props.fullMenuOptions}
              />
            </Grid.Row>
            {this.props.timeOptions ? (
              <Grid.Row>
                <Dropdown
                  fluid
                  selection
                  name="timeSelection"
                  onChange={this.handleDropdownChange}
                  placeholder="Select Time"
                  style={{background: 'white'}}
                  options={this.props.timeOptions}
                />
              </Grid.Row>
            ) : (
              ''
            )}
            {this.state.fullMenuSelection !== 'incidentsBasisEncounter' ? (
              <Grid.Row>
                <Dropdown
                  fluid
                  name="dutySelection"
                  selection
                  style={{background: 'white'}}
                  placeholder="Select Duty"
                  options={this.props.dutyOptions}
                  onChange={this.handleDropdownChange}
                />
              </Grid.Row>
            ) : (
              ''
            )}

            {this.props.commandOptions &&
            this.state.fullMenuSelection !== 'incidentsBasisEncounter' ? (
              <Grid.Row>
                <Dropdown
                  placeholder="Select Commands"
                  name="commandSelection"
                  fluid
                  search
                  selection
                  style={{background: 'white'}}
                  options={this.props.commandOptions}
                  onChange={this.handleDropdownChange}
                />
              </Grid.Row>
            ) : (
              ''
            )}

            <Grid.Row>
              <Button onClick={this.handleSubmit} fluid color="black">
                Get Chart
              </Button>
            </Grid.Row>
            <Grid.Row>
              <Button label="Save JPEG" fluid color="black" icon="picture" />
            </Grid.Row>
            <Grid.Row>
              <Button
                label="Copy Data"
                onClick={this.handleCopyData}
                fluid
                color="black"
                icon="copy"
              />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    fullMenuOptions: state.graphOption.fullMenuOptions,
    dutyOptions: state.graphOption.dutyOptions,
    timeOptions: state.graphOption.timeOptions,
    commandOptions: state.graphOption.commandOptions,
    currentView: state.currentView,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getTimes: () => dispatch(getTimes()),
    getCommands: () => dispatch(getCommands()),
    getData: (path) => dispatch(getData(path)),
  }
}

export default connect(mapState, mapDispatch)(Intro)

/**
 * PROP TYPES
 */
Intro.propTypes = {
  //   handleClick: PropTypes.func.isRequired,
  //   isLoggedIn: PropTypes.bool.isRequired
}
