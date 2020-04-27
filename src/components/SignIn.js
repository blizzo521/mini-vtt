import React from 'react'
import firebase from 'firebase'
import './SignIn.css'

import googleSignInButton from '../assets/btn_google_signin_dark_normal_web.png'
import wyvern from '../assets/dragon.png'
import { navigate } from 'hookrouter'

var provider = new firebase.auth.GoogleAuthProvider()

function SignIn() {
  function signIntoGoogle() {
    firebase.auth().signInWithPopup(provider).then(result => {
      // const token = result.credential.accessToken
      // const user = result.user
      navigate('/tables')
    }).catch(error => {
      // const errorCode = error.code
      // const errorMessage = error.message
      // const email = error.email
      // const credential = error.credential
    })
  }

  return (
    <div className='SignIn'>
      <div className='SignIn__greeting'>
        <div className='SignIn__header'>
          Greetings adventurers!
        </div>
        <div className='SignIn__message'>
          Cast aside the real world and join together for epic adventurers!
          Just sign in with your Google account and meet us on the other side.
          <img src={wyvern} className='SignIn__dragon' alt='Green Dragon' />
        </div>
      </div>

      <img src={googleSignInButton} 
        className='SignIn__button'
        onClick={signIntoGoogle} 
        alt='Sign In With Google' />
    </div>
  )
}

export default SignIn
