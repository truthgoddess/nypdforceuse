import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Grid, Dropdown, Input, Button, Form, Select} from 'semantic-ui-react'
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
      injurySelection: 'Select Injuries',
      dutySelection: 'Select Duty',
      test: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e, data) => {
    e.preventDefault()
    console.log('helleoeooeoeoeo')
    console.log(e.target.fullMenuOptions.value, 'what?')
  }

  handleChange = (e, data) => {
    console.log(e.target(), 'event')
    // let text = data.options.forEach((item) => {
    //   if (item.key === data.value) return item.text
    // })
    // this.setState({
    //   fullMenuSelection: text,
    // })
    //console.log(this.state)
  }

  handleInjurySelectionChange = (e, data) => {
    console.log(data.value)
    let text = data.options.forEach((item) => {
      if (item.key === data.value) return item.text
    })
    this.setState({
      injurySelection: text,
    })
  }

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
              <Form onSubmit={this.handleSubmit}>
                <Form.Field
                  control={Select}
                  label="Gender"
                  options={this.props.fullMenuOptions}
                  placeholder="Select Graph"
                />
                <Form.Field control={Button}>Submit</Form.Field>
              </Form>
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
    putSelections: (selections) => dispatch(putSelection(selections)),
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
