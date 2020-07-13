import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Grid, Segment, GridRow, Dropdown, Button} from 'semantic-ui-react'
import {VictoryBar} from 'victory'

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
      fullMenuSelection: 'Select Main Graph',
      injurySelection: 'Select Injuries',
      dutySelection: 'Select Duty',
      test: 0,
    }
    this.handleFullMenuChange = this.handleFullMenuChange.bind(this)
  }

  handleFullMenuChange = (e, data) => {
    console.log(e)
    this.setState({fullMenuSelection: data.value})
    console.log(this.state.test)
  }

  handleInjurySelectionChange = (e) => {}

  handleDutySelectionChange = (e) => {}

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
                onChange={this.handleFullMenuChange}
                style={{background: 'white'}}
                button
                floating
                labeled
                options={this.props.fullMenuOptions}
                text={this.state.fullMenuSelection}
              />
            </Grid.Row>
            <Grid.Row>
              <Dropdown
                style={{background: 'white'}}
                button
                floating
                labeled
                options={this.props.injuryOptions}
                text={this.state.injurySelection}
              />
            </Grid.Row>
            <Grid.Row>
              <Dropdown
                style={{background: 'white'}}
                button
                floating
                labeled
                options={this.props.dutyOptions}
                text={this.state.dutySelection}
              />
            </Grid.Row>
            <Grid.Row>
              <Dropdown
                style={{background: 'white'}}
                button
                floating
                labeled
                options={languageOptions}
                search
                text="command from state"
              />
            </Grid.Row>
            <Grid.Row>
              <Button color="black">Save JPEG</Button>
            </Grid.Row>
            <Grid.Row>
              <Button color="black">Copy Data</Button>
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
