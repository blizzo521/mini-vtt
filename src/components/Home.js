import React from 'react'
import { useRoutes, navigate } from 'hookrouter'

import Tables from './Tables'
import Table from './Table'
import SignIn from './SignIn'
import Header from './Header'
import Monsters from './Monsters'
import Monster from './Monster'

import './Home.css'
import { useAuth } from '../hooks/useAuth'

const routes = {
  '/signin': () => <SignIn />,
  '/tables': () => <Tables />,
  '/table/:id': ({id}) => <Table id={id} />,
  '/monsters': () => <Monsters />,
  '/monster/:id': ({id}) => <Monster id={id} />,
}

function Home() {
  const routeResult = useRoutes(routes)
  const { user, initializing} = useAuth()

  function isSignIn() {
    return routeResult && routeResult.type === SignIn
  }

  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        {loadContent()}
      </div>
    </div>
  )

  function loadContent() {
    // dont load anything until auth is resolved
    if (initializing) {
      return null
    }

    // if no auth, send anything not signin to signin
    if (!user && !isSignIn()) {
      navigate('/signin')
      return
    }

    // defaults and stupidity
    if ((user && isSignIn()) || !routeResult) {
      navigate('/tables')
      return
    }

    return routeResult || null
  }
}

export default Home
