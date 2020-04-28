import React from 'react'
import PropTypes from 'prop-types'
import Box from './lib/Box'

import './Monster.css'

function Monster(props) {

  // look into using a hook here to fetch the full data set maybe?
  // it could give you a response blob and a loading state
  // or just do a useState() and manage the fetching and loading right in here to start
  // pretend it returns this:
  const monsterData = {
    id: props.id,
    name: 'Devon\'s Mom'
  }

  return (
    <Box className='Monster'>
      <p>build out the monster stat block already</p>

      <ul>
        <li>ID: {monsterData.id}</li>
        <li>Name: {monsterData.name}</li>
      </ul>
    </Box>
  )
}

Monster.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Monster
