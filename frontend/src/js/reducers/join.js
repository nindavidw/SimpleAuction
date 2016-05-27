import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
  joining: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.JOIN:
      return {
        ...state,
        joining: true
      };
    case ActionTypes.JOIN_SUCCESS:
      return {
        ...state,
        joining: false,
        user: action.result
      };
    case ActionTypes.JOIN_FAIL:
      return {
        ...state,
        joining: false,
        joinError: action.error
      };
    default:
      return state;
  }
}
