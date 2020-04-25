import React, { useContext } from 'react'
import { Router } from '@reach/router'

import { UserContext } from '../contexts/UserContext'
import Table from './Table'
import SignIn from './SignIn'
import Header from './Header'

import './Home.css'

function Home() {
  const user = useContext(UserContext)

  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        {user ? <Table /> : <SignIn />}
      </div>
    </div>
  )
}

export default Home
