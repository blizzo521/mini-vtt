import { ADD_ROLL } from '../constants/action-types'

const initialState = {
  rolls: []
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ROLL) {
    return Object.assign({}, state, {
      rolls: state.rolls.concat(action.payload)
    })
  }
  return state
}

export default rootReducer
