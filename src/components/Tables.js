import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import Firebase from 'firebase'

import Box from './lib/Box'
import './Tables.css'
import { A } from 'hookrouter'
const serverTimestamp = Firebase.firestore.FieldValue.serverTimestamp

function Tables() {
  const firestore = useFirestore()
  const user = Firebase.auth().currentUser

  const firestoreQuery = {
    collection: 'tables',
    orderBy: ['createdAt', 'desc'],
    where: ['players', 'array-contains', user && user.uid]
  }
  console.log(firestoreQuery)
  useFirestoreConnect([firestoreQuery])

  const tables = useSelector(({ firestore: { ordered } }) => ordered.tables)
  const [value, setValue] = useState('')

  return (
    <Box className='Tables'>
      <p>A table is what you gather around to play a game! See what tables you belong to here, or create a new one!</p>
      <div className='Tables__tableLinks'>
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
        <A className='Tables__tableLink' href={`/table/${table.id}`} key={i}>{table.name}</A>
      )
    })
  }
}


export default Tables
