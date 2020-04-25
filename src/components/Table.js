import {React, useContext} from 'react'
import Rolls from './Rolls'

import { UserContext } from "../providers/UserProvider";
import auth from './App.js'

import './App.css'

function Table() {
  const user = useContext(UserContext)
  console.log(user.displayName)

  return(
    <div className="App">
      <div className="App-header">
        <h2>Mini-VTT</h2>
        <div>
          <button onClick={() => {auth.signOut()}}>Sign out</button>
        </div>
      </div>
      <Rolls />
    </div>
  )
}

export default Table
