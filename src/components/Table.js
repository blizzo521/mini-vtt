import React from 'react'
import firebase from 'firebase'
import Rolls from './Rolls'

import './Table.css'

function Table() {
  function signOutOfGoogle() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    })
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>Mini-VTT</h2>
        <button onClick={signOutOfGoogle}>Laters</button>
      </div>
      <Rolls />
    </div>
  )
}

export default Table
