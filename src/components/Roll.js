import React from 'react'
import PropTypes from 'prop-types'
import { firestore } from 'firebase'

import './Roll.css'


function Roll(props) {
  function deleteRoll() {
    return firestore.collection('rolls').doc(props.id).delete()
  }

  function prepareDie(die) {
    return die.replace(/cs.*/, '')
  }

  return (
    <div className='Roll'>
      <div className='Roll__message'>
        <span className='Roll__roller'>Somebody </span>
        rolled <span className='Roll__dice'>{prepareDie(props.die)} </span>
        and got <span className='Roll__total'>{props.result}</span>
        <button className='Roll__delete' onClick={deleteRoll}>X</button>
      </div>
      <div className='Roll__explain'>
        {props.explain}
      </div>
    </div>
  )
}

Roll.propTypes = {
  id: PropTypes.string.isRequired
}

export default Roll
