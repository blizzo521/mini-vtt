// src/js/components/Form.jsx
import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import Firebase from 'firebase'

import { DiceRoller } from 'rpg-dice-roller'

import d4Icon from '../assets/d4.png'
import d6Icon from '../assets/d6.png'
import d8Icon from '../assets/d8.png'
import d10Icon from '../assets/d10.png'
import d12Icon from '../assets/d12.png'
import d20Icon from '../assets/d20.png'

const serverTimestamp = Firebase.firestore.FieldValue.serverTimestamp
const roller = new DiceRoller()

function NewRoll() {
  const [value, setValue] = useState('');
  const [formatError, setFormatError] = useState(false)
  const [saving, setSaving] = useState(false)

  const firestore = useFirestore()

  function addRoll(die) {
    const roll = roller.roll(die)
    saveRoll(die, roll.total)
  }

  function addTextRoll() {
    try {
      const result = roller.roll(value)  
      saveRoll(value, result.total)
    } catch (error) {
      setFormatError(true)
    }
  }

  function saveRoll(die, result) {
    if (saving === true) {
      return
    }
    setSaving(true)
    return firestore
      .collection('rolls')
      .add({ 
        die: die, 
        result: result, 
        createdAt: serverTimestamp() })
      .then(() => {
        setSaving(false)
      })
  }

  function clearRolls() {
    firestore.collection('rolls').get().then((querySnapshot) => {
      querySnapshot.forEach((rollDoc) => {
        firestore.collection('rolls').doc(rollDoc.id).delete()
      })
    })
  }

  function rollD4() { addRoll('1d4') }
  function rollD6() { addRoll('1d6') }
  function rollD8() { addRoll('1d8') }
  function rollD10() { addRoll('1d10') }
  function rollD12() { addRoll('1d12') }
  function rollD20() { addRoll('1d20') }

  return (
    <div>
      <div className='diceRolls'>
        <img onClick={rollD4} src={d4Icon} className='die' alt='d4' />
        <img onClick={rollD6} src={d6Icon} className='die' alt='d6' />
        <img onClick={rollD8} src={d8Icon} className='die' alt='d8' />
        <img onClick={rollD10} src={d10Icon} className='die' alt='d10' />
        <img onClick={rollD12} src={d12Icon} className='die' alt='d12' />
        <img onClick={rollD20} src={d20Icon} className='die' alt='d20' />
      </div>
      <div>
        <input 
          type='text' 
          value={value} 
          onChange={e => setValue(e.target.value)} />
        <button onClick={addTextRoll}>Roll!</button>
        <div className='clearRolls'>
          <button onClick={clearRolls}>Clear Rolls</button>
        </div>
      </div>
      {maybeShowError()}
    </div>
  )

  function maybeShowError() {
    if (formatError === true) {
      return (
        <div className='rollFormatError'>Invalid roll format</div>
      )
    }
    return null;
  }
}

export default NewRoll
