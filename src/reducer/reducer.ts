import { stateType } from "../types/state.type";
import { actionType } from "../types/action.type";
import {
  CLEAR_VAL,
  INSERT_ANS,
  INSERT_VAL,
  REMOVE_LAST,
} from "../actions/actions";

export const reducer = (state: stateType, action: actionType) => {
  if (action.type == INSERT_VAL) {
    return { ...state, inputs: action.payload };
  }
  if (action.type == INSERT_ANS) {
    return { ...state, answer: action.payload };
  }
  if (action.type == REMOVE_LAST) {
    return { ...state, inputs: state.inputs.slice(0, -1) };
  }
  if (action.type == CLEAR_VAL) {
    return { ...state, inputs: "" };
  }
  return state;
};
