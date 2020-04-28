import React from 'react'
import { A } from 'hookrouter'
import Box from './lib/Box'

import './Monsters.css'

function Monsters(props) {

  const someMonster = {
    id: 521,
    name: 'Devon\'s Mom'
  }

  return (
    <Box className='Monsters'>
      <p>figure out how to list all the monsters here</p>
      <p>link to a specific monster like this</p>
      <A href={`/monster/${someMonster.id}`}>{someMonster.name}</A>
    </Box>
  )
}

Monsters.propTypes = {

}

export default Monsters
