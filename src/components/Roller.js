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
import diceSound from '../assets/dice.wav'

import './Roller.css'

const serverTimestamp = Firebase.firestore.FieldValue.serverTimestamp
const roller = new DiceRoller()

function Roller(props) {
  const tableId = props.tableId
  const [value, setValue] = useState('')
  const [formatError, setFormatError] = useState(false)
  const [saving, setSaving] = useState(false)
  const rollSound = new Audio(diceSound)

  const firestore = useFirestore()

  function rollDie(die) {
    const roll = roller.roll(die)
    saveRoll(die, roll.total, roll.toString())
  }

  function addTextRoll() {
    try {
      const roll = roller.roll(value)  
      saveRoll(value, roll.total, roll.toString())
    } catch (error) {
      setFormatError(true)
    }
  }

  function saveRoll(die, result, explain) {
    rollSound.play()
    if (saving === true) {
      return
    }
    setSaving(true)
    return firestore
      .collection(`/tables/${tableId}/rolls`)
      .add({ 
        die: die, 
        result: result, 
        explain: explain,
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

  function rollD4() { rollDie('1d4') }
  function rollD6() { rollDie('1d6') }
  function rollD8() { rollDie('1d8') }
  function rollD10() { rollDie('1d10') }
  function rollD12() { rollDie('1d12') }
  function rollD20() { rollDie('1d20cs=20cf=1') }

  return (
    <div>
      <div className='Roller__dice'>
        <img onClick={rollD4} src={d4Icon} className='Roller__die' alt='d4' />
        <img onClick={rollD6} src={d6Icon} className='Roller__die' alt='d6' />
        <img onClick={rollD8} src={d8Icon} className='Roller__die' alt='d8' />
        <img onClick={rollD10} src={d10Icon} className='Roller__die' alt='d10' />
        <img onClick={rollD12} src={d12Icon} className='Roller__die' alt='d12' />
        <img onClick={rollD20} src={d20Icon} className='Roller__die' alt='d20' />
      </div>
      <div>
        <input 
          type='text' 
          value={value} 
          onChange={e => setValue(e.target.value)} />
        <button onClick={addTextRoll}>Roll!</button>
        <div className='Roller__clearAll'>
          <button onClick={clearRolls}>Clear Rolls</button>
        </div>
      </div>
      {maybeShowError()}
    </div>
  )

  function maybeShowError() {
    if (formatError === true) {
      return (
        <div className='Roller__error'>Invalid roll format</div>
      )
    }
    return null
  }
}

export default Roller
