import React, { useContext } from 'react'

import { UserContext } from '../contexts/UserContext'
import Tables from './Tables'
import Rolls from './Rolls'
import SignIn from './SignIn'
import Header from './Header'

import './Home.css'

function Home() {
  const user = useContext(UserContext)

  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        {user ? <Tables /> : <SignIn />}
      </div>
    </div>
  )
}

export default Home
