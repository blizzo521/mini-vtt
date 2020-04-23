import React from 'react'
import PropTypes from 'prop-types'

import d4Icon from '../assets/d4.png'
import d6Icon from '../assets/d6.png'
import d8Icon from '../assets/d8.png'
import d10Icon from '../assets/d10.png'
import d12Icon from '../assets/d12.png'
import d20Icon from '../assets/d20.png'

const dieSrcMap = {
    'd4': d4Icon,
    'd6': d6Icon,
    'd8': d8Icon,
    'd10': d10Icon,
    'd12': d12Icon,
    'd20': d20Icon,
}

function Die({kind = 'd6'}) {
  return (
    <img onClick={roll} src={dieSrcMap[kind]} className='die' alt={kind} />
  )
}

Die.propTypes = {
    kind: PropTypes.string.isRequired,
    roll: PropTypes.func.isRequired
}

export default Die