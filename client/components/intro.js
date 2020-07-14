import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Grid, Dropdown, Button, Form, Select} from 'semantic-ui-react'
import {VictoryBar} from 'victory'
import {putSelection} from '../store/graphOption'

const languageOptions = [
  {key: 'Arabic', text: 'Arabic', value: 'Arabic'},
  {key: 'Chinese', text: 'Chinese', value: 'Chinese'},
  {key: 'Danish', text: 'Danish', value: 'Danish'},
  {key: 'Dutch', text: 'Dutch', value: 'Dutch'},
  {key: 'English', text: 'English', value: 'English'},
  {key: 'French', text: 'French', value: 'French'},
  {key: 'German', text: 'German', value: 'German'},
  {key: 'Greek', text: 'Greek', value: 'Greek'},
  {key: 'Hungarian', text: 'Hungarian', value: 'Hungarian'},
  {key: 'Italian', text: 'Italian', value: 'Italian'},
  {key: 'Japanese', text: 'Japanese', value: 'Japanese'},
  {key: 'Korean', text: 'Korean', value: 'Korean'},
  {key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian'},
  {key: 'Persian', text: 'Persian', value: 'Persian'},
  {key: 'Polish', text: 'Polish', value: 'Polish'},
  {key: 'Portuguese', text: 'Portuguese', value: 'Portuguese'},
  {key: 'Russian', text: 'Russian', value: 'Russian'},
  {key: 'Spanish', text: 'Spanish', value: 'Spanish'},
  {key: 'Swedish', text: 'Swedish', value: 'Swedish'},
  {key: 'Turkish', text: 'Turkish', value: 'Turkish'},
  {key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese'},
]

class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      fullMenuSelection: 'Select Graph Type',
      timeSelection: 'Select Time',
      dutySelection: 'Select Duty',
      commandSelection: 'Select Command',
    }
    this.handleFullMenuChange = this.handleFullMenuChange.bind(this)
  }

  handleFullMenuChange = async (e, data) => {
    await this.setState({
      fullMenuSelection: data.value,
    })
    console.log(this.state)
  }

  handleDutySelectionChange = (e) => {}

  handleTimeSelectionChange = (e) => {}

  handleCommandSelectionChange = (e) => {}

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
                onChange={this.handleFullMenuChange}
                style={{background: 'white'}}
                options={this.props.fullMenuOptions}
              />
            </Grid.Row>

            <Grid.Row>
              <Dropdown
                fluid
                selection
                name="timeSelection"
                onChange={this.handleTimeSelectionChange}
                placeholder="Select Time"
                style={{background: 'white'}}
                options={languageOptions}
              />
            </Grid.Row>

            <Grid.Row>
              <Dropdown
                fluid
                selection
                style={{background: 'white'}}
                placeholder="Select Duty"
                options={this.props.dutyOptions}
                onChange={this.handleDutySelectionChange}
              />
            </Grid.Row>
            <Grid.Row>
              <Dropdown
                placeholder="Select Commands"
                fluid
                selection
                style={{background: 'white'}}
                options={languageOptions}
                onChange={this.handleCommandSelectionChange}
              />
            </Grid.Row>
            <Grid.Row>
              <Button fluid color="black">
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
    injuryOptions: state.graphOption.injuryOptions,
    dutyOptions: state.graphOption.dutyOptions,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
    putSelection: (selections) => dispatch(putSelection(selections)),
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
