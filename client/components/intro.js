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

const Intro = () => (
  <Grid celled padded columns={2} style={{height: '100vh', margin: '10px'}}>
    <Grid.Row textAlign="center">
      <Grid.Column height="50vh" verticalAlign="middle" width={12}>
        <VictoryBar></VictoryBar>
      </Grid.Column>
      <Grid.Column width={4}>
        <Grid.Row>
          <Dropdown
            style={{background: 'white'}}
            button
            floating
            labeled
            options={languageOptions}
            search
            text="time from state"
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
            text="injuries from state"
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
            text="off/on duty from state"
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

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
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
