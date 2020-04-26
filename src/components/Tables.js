import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Firebase from 'firebase'

import Box from './lib/Box'
import './Tables.css'
const serverTimestamp = Firebase.firestore.FieldValue.serverTimestamp

function Tables() {
  const firestore = useFirestore()
  const user = Firebase.auth().currentUser

  useFirestoreConnect(
    [
      {
        collection: 'tables',
        orderBy: ['createdAt', 'desc']
      }
    ]
  )

  const tables = useSelector(({ firestore: { ordered } }) => ordered.tables)
  const [value, setValue] = useState('')

  return (
    <Box className='Tables'>
      <p>A table is what you gather around to play a game! See what tables you belong to here, or create a new one!</p>
      <div className='Tables__results'>
        {resultsContent(tables)}
      </div>
      <div className='Tables__createNew'>
        <input 
          type='text' 
          value={value} 
          onChange={e => setValue(e.target.value)} />
        <button onClick={createTable}>Create Table</button>
      </div>
    </Box>
  )

  async function createTable() {
    debugger
    await firestore
      .collection('tables')
      .add({
        name: value,
        gameMasterId: user.uid,
        createdAt: serverTimestamp(),
        members: [],
        rolls: []
      })
  }

  function resultsContent(tables) {
    if (!isLoaded(tables)) {
      return 'Loading...'
    }
  
    if (isEmpty(tables)) {
      return 'Nothing here, create a table!'
    }
  
    return Object.keys(tables).map((key, i) => {
      const table = tables[key]
      return (
        <div className='Tables__table'>
          <a href='#'>{table.name}</a>
        </div>
      )
      // return <div key={i}>some table</div>
      // return (<Table key={`${key}-${i}`} id={key} {...table} />)
    })
  }
}


export default Tables
