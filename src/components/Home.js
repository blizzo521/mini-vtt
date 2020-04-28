import React, { useContext } from 'react'
import { useRoutes, navigate } from 'hookrouter'

import { UserContext } from '../contexts/UserContext'
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
  console.log('HOME =====================================')
  const routeResult = useRoutes(routes)
  const { user, initializing} = useAuth()

  function isSignIn() {
    return routeResult && routeResult.type === SignIn
  }

console.log('a', user, initializing)

  // dont load anything until auth is done
  if (initializing !== false) {
    return (
      <div className="Home">
        <Header />
        <div className="Home__content"></div>
      </div>
    )
  }

  console.log('b', user, initializing, isSignIn() ? 'SignIn' : 'not SignIn')

  // if no auth, send anything not signin to signin
  if (!user && !isSignIn()) {
    navigate('/signin')
    return
  }

  console.log('c', user, initializing, isSignIn() ? 'SignIn' : 'not SignIn')

  // default to tables
  if (!routeResult) {
    navigate('/tables')
    return
  }

  console.log('d', user, initializing, isSignIn() ? 'SignIn' : 'not SignIn')

  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        {routeResult || <div />}
      </div>
    </div>
  )

}

export default Home
