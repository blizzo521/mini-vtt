// src/js/components/Form.jsx
import React from 'react'
import { useFirestore } from 'react-redux-firebase'
import Firebase from 'firebase'

import { d4, d6, d8, d10, d12, d20 } from '../lib/dice'
import d4Icon from '../assets/d4.png'
import d6Icon from '../assets/d6.png'
import d8Icon from '../assets/d8.png'
import d10Icon from '../assets/d10.png'
import d12Icon from '../assets/d12.png'
import d20Icon from '../assets/d20.png'

const serverTimestamp = Firebase.firestore.FieldValue.serverTimestamp

function NewRoll() {
  const firestore = useFirestore()

  function addRoll(die, result) {
    // debugger
    return firestore
      .collection('rolls')
      .add({ die, result, createdAt: serverTimestamp() })
  }

  function rollD4() { addRoll('1d4', d4()) }
  function rollD6() { addRoll('1d6', d6()) }
  function rollD8() { addRoll('1d8', d8()) }
  function rollD10() { addRoll('1d10', d10()) }
  function rollD12() { addRoll('1d12', d12()) }
  function rollD20() { addRoll('1d20', d20()) }

  return (
    <div>
      <img onClick={rollD4} src={d4Icon} className='die' alt='d4' />
      <img onClick={rollD6} src={d6Icon} className='die' alt='d6' />
      <img onClick={rollD8} src={d8Icon} className='die' alt='d8' />
      <img onClick={rollD10} src={d10Icon} className='die' alt='d10' />
      <img onClick={rollD12} src={d12Icon} className='die' alt='d12' />
      <img onClick={rollD20} src={d20Icon} className='die' alt='d20' />
    </div>
  )
}

export default NewRoll
