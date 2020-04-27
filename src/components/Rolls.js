import React from 'react'
import Roller from './Roller'
import Roll from './Roll'
import Box from './lib/Box'

import './Rolls.css'

function Rolls(props) {
  const { rolls, tableId } = props

  return (
    <Box className='Rolls'>
      <Roller tableId={tableId} />
      <div className='Rolls__results'>
        {rolls.map((roll, i) => {
          return <Roll key={i} id={roll.id} {...roll} />
        })}
      </div>
    </Box>
  )
}

export default Rolls