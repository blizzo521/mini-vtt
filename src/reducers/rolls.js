import { ADD_ROLL } from "../constants/action-types";

export default function gameActions(state = [], action) {
    switch(action.type) {
      case ADD_ROLL:
        console.log('adding roll', action.payload)
        console.log('state before', state)
        return state.concat([action.payload])
      default:
        return state
    }
}
