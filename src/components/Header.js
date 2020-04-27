import React, {useContext} from 'react'
import firebase from 'firebase'
import { UserContext } from '../contexts/UserContext'
import './Header.css'
import { navigate } from 'hookrouter'

function Header() {
  const user = useContext(UserContext)

  function signOutOfGoogle() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        navigate('/')
    }).catch(function(error) {
        // An error happened.
    })
  }

  function signOutLink() {
    return (
      <div className='Header__controls'>
        <img className='Header__avatar' src={user['photoURL']} alt='avatar' />
        <button onClick={signOutOfGoogle}>Log Out</button>
      </div>
      
    )
  }

  return (
    <div className='Header'>
      <div className='Header__title'>Mini-VTT</div>
      {user ? signOutLink() : null}
    </div>
  )
}

export default Header
