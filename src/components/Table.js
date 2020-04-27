import React from 'react'
import Rolls from './Rolls'

import './Table.css'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { A } from 'hookrouter'

function Table(props) {
  useFirestoreConnect(
    [
      {
        collection: 'tables',
        doc: props.id
      },
      {
        collection: `tables/${props.id}/rolls`,
        orderBy: ['createdAt', 'desc']
      }
    ]
  )

  const table = useSelector(
    ({ firestore: { data } }) => data.tables && data.tables[props.id]
  )

  const rolls = useSelector(
    ({ firestore: { ordered } }) => ordered[`tables/${props.id}/rolls`]
  )

  return (
    <div className='Table'>
      {tableName()}
      {resultsContent(table)}
    </div>
  )

  function tableName() {
    if (!isLoaded(table)) {
      return 'Loading...'
    }

    return(
      <h3>{table.name} <A href='/tables'>Back to tables</A></h3>
    )
  }

  function resultsContent(table) {
    if (!isLoaded(rolls)) {
      return 'Loading...'
    }

    return(
      <Rolls rolls={rolls} tableId={props.id} />
    )
  }
}

export default Table
