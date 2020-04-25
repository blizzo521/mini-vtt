import React from 'react'
import firebase from 'firebase'
import './SignIn.css'

var provider = new firebase.auth.GoogleAuthProvider()

function SignIn() {
  function signIntoGoogle() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // const token = result.credential.accessToken
      // const user = result.user
    }).catch(function(error) {
      // const errorCode = error.code
      // const errorMessage = error.message
      // const email = error.email
      // const credential = error.credential
    })
  }
  
  return (
    <div className='SignIn'>
      <button onClick={signIntoGoogle}>Sign in Bro</button>
    </div>
  )
}

export default SignIn
