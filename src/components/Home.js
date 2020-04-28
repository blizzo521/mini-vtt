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

const routes = {
  '/signin': () => <SignIn />,
  '/tables': () => <Tables />,
  '/table/:id': ({id}) => <Table id={id} />,
  '/monsters': () => <Monsters />,
  '/monster/:id': ({id}) => <Monster id={id} />,
}

function Home() {
  const routeResult = useRoutes(routes)

  if (!routeResult) {
    navigate('/signin')
  }

  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        {routeResult || <div>Not Found</div>}
      </div>
    </div>
  )
}

export default Home
