import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

import './Roll.css'

function Roll({ id }) {
  const firestore = useFirestore()
  const roll = useSelector(
    ({ firestore: { data } }) => data.rolls && data.rolls[id]
  )

  function deleteRoll() {
    return firestore.collection('rolls').doc(id).delete()
  }

  if(!roll) {
    return null
  }

  function prepareDie(die) {
    return die.replace(/cs.*/, '')
  }

  return (
    <div className='Roll'>
      <div className='Roll__message'>
        <span className='Roll__roller'>Somebody </span>
        rolled <span className='Roll__dice'>{prepareDie(roll.die)} </span>
        and got <span className='Roll__total'>{roll.result}</span>
        <button className='Roll__delete' onClick={deleteRoll}>X</button>
      </div>
      <div className='Roll__explain'>
        {roll.explain}
      </div>
    </div>
  )
}

Roll.propTypes = {
  id: PropTypes.string.isRequired
}

export default Roll
