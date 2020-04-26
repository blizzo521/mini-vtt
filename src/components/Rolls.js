import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import AddRole from './Roller'
import Roll from './Roll'
import Box from './lib/Box'

import './Rolls.css'

function Rolls() {
  useFirestoreConnect(
    [
      {
        collection: 'rolls',
        orderBy: ['createdAt', 'desc']
      }
    ]
  )

  const rolls = useSelector(({ firestore: { ordered } }) => ordered.rolls)

  return (
    <Box className='Rolls'>
      <AddRole />
      <div className='Rolls__results'>
        {resultsContent(rolls)}
      </div>
    </Box>
  )
}

function resultsContent(rolls) {
  if (!isLoaded(rolls)) {
    return 'Loading...'
  }

  if (isEmpty(rolls)) {
    return 'Nothing here, get rolling...'
  }

  return Object.keys(rolls).map((key, i) => {
    const roll = rolls[key]
    return (<Roll key={`${key}-${i}`} id={key} {...roll} />)
  })
}

export default Rolls