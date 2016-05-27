import { JOIN, JOIN_SUCCESS, JOIN_FAIL } from '../constants/ActionTypes';

export function isJoined(globalState) {
  return globalState.join && globalState.join.user;
}

export function join(user) {
  return {
    types: JOIN_SUCCESS,
    result: user
  };
}

/* export function join(userData) {
  return (dispatch) => {
    dispatch({
      type: JOIN
    });

    joinService
      .doJoin(userData)
      .then(err, user) => {
      if (error) {
        dispatch({
          type: JOIN_FAIL,
          error: err.reason
        });
      } else {
        dispatch({
          type: JOIN_FAIL,
          error: err.reason
        });
      }
    });
  };
} */
