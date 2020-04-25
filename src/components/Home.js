import React, { useContext } from 'react'
import Table from './Table'
import { Router } from '@reach/router'

import SignIn from './SignIn'
import { UserContext } from '../contexts/UserContext'

import './Home.css'

function Home() {
  const user = useContext(UserContext)

  if (user) {
    return <Table />
  }

  return (
    <Router>
      <SignIn path='/' />
    </Router>
  )
}

export default Home
