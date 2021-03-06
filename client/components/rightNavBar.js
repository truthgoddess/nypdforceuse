import React from 'react'
import {connect} from 'react-redux'
import {Grid, Dropdown, Button} from 'semantic-ui-react'
import {getTimes, getCommands, getSelections} from '../store/graphOption'
import {getData} from '../store/currentView'
import {copyToClipboard} from '../utility'

class RightNavBar extends React.Component {
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
    this.props.getSelections({
      fullMenuSelection: this.state.fullMenuSelection,
      dutySelection: this.state.dutySelection,
      timeSelection: this.state.timeSelection,
      commandSelection: this.state.commandSelection,
    })
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
      <Grid.Column id="rightColBackground" width={4}>
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
          <Button fluid onClick={this.handleCopyData} color="black">
            Copy Data
          </Button>
        </Grid.Row>
      </Grid.Column>
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
    getTimes: () => dispatch(getTimes()),
    getCommands: () => dispatch(getCommands()),
    getData: (path) => dispatch(getData(path)),
    getSelections: (selections) => dispatch(getSelections(selections)),
  }
}

export default connect(mapState, mapDispatch)(RightNavBar)

/**
 * PROP TYPES
 */
