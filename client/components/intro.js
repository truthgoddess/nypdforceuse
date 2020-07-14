import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Grid, Dropdown, Button, Form, Select} from 'semantic-ui-react'
import {VictoryBar} from 'victory'
import {getTimes, getCommands} from '../store/graphOption'

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
    this.handleDutySelectionChange = this.handleDutySelectionChange.bind(this)
    this.handleTimeSelectionChange = this.handleTimeSelectionChange.bind(this)
    this.handleCommandSelectionChange = this.handleCommandSelectionChange.bind(
      this
    )
  }

  async componentDidMount() {
    await this.props.getCommands()
    await this.props.getTimes()
  }

  handleDropdownChange = async (e, {name, value}) => {
    await this.setState({
      [name]: value,
    })
  }

  handleSubmit = async (e, {value}) => {
    e.preventDefault()
    await console.log(this.state)
  }

  render() {
    return (
      <Grid celled padded columns={2} style={{height: '100vh', margin: '10px'}}>
        <Grid.Row textAlign="center">
          <Grid.Column height="50vh" verticalAlign="middle" width={12}>
            <VictoryBar></VictoryBar>
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

            {this.props.commandOptions ? (
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
              <Button fluid color="black">
                Save JPEG
              </Button>
            </Grid.Row>
            <Grid.Row>
              <Button fluid color="black">
                Copy Data
              </Button>
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
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
    getTimes: () => dispatch(getTimes()),
    getCommands: () => dispatch(getCommands()),
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
