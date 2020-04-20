import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function Roll({ id }) {
  const roll = useSelector(
    ({ firestore: { data } }) => data.rolls && data.rolls[id]
  )

  return (
    <div className="Roll">
      You rolled {roll.die} and got {roll.result}
    </div>
  )
}

Roll.propTypes = {
  id: PropTypes.string.isRequired
}

export default Roll
