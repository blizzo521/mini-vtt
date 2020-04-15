import { ADD_ROLL } from "../constants/action-types";

export function addRoll(payload) {
  return { type: ADD_ROLL, payload }
}
