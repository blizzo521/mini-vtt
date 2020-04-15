import React from 'react'
import { connect } from 'react-redux'
import Roller from './Roller'

const mapStateToProps = state => {
  console.log('entire state', state)
  return { rolls: state.rolls }
}

const ConnectedRolls = ({ rolls }) => (
  <div>
    <Roller />
    <div>
      {rolls.map((roll, i) => (
        <div className='roll' key={i}>You rolled {roll.die} and got {roll.result}</div>
      ))}
    </div>

  </div>
)

const Rolls = connect(mapStateToProps)(ConnectedRolls)
export default Rolls
