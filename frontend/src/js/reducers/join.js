import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  joining: false,
  user: null
};

export default function reducer(state = initialState, action = {}) {
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
