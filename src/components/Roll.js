import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase';


function Roll({ id }) {
  const firestore = useFirestore();
  const roll = useSelector(
    ({ firestore: { data } }) => data.rolls && data.rolls[id]
  )

  function deleteRoll() {
    return firestore.collection('rolls').doc(id).delete()
  }

  return (
    <div className="Roll">
      You rolled {roll.die} and got {roll.result}
      <button onClick={deleteRoll}>X</button>
    </div>
  )
}

Roll.propTypes = {
  id: PropTypes.string.isRequired
}

export default Roll
