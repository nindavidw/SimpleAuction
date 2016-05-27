const LOAD = 'join/LOAD';
const LOAD_SUCCESS = 'join/LOAD_SUCCESS';
const LOAD_FAIL = 'join/LOAD_FAIL';
const JOIN = 'join/JOIN';
const JOIN_SUCCESS = 'join/JOIN_SUCCESS';
const JOIN_FAIL = 'join/JOIN_FAIL';

const initialState = {
  joining: false,
  user: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case JOIN:
      return {
        ...state,
        joining: true
      };
    case JOIN_SUCCESS:
      return {
        ...state,
        joining: false,
        user: action.result
      };
    case JOIN_FAIL:
      return {
        ...state,
        joining: false,
        joinError: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.join && globalState.join.load;
}

export function join(userData) {
  return (dispatch) => {
    dispatch({
      type: JOIN
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type: JOIN_SUCCESS,
          result: userData
        });
        resolve(true);
      }, 800);
    });

    /* joinService
      .doJoin(userData)
      .then((err, user) => {
        if (err) {
          dispatch({
            type: JOIN_FAIL,
            error: err.reason
          });
        } else {
          dispatch({
            type: JOIN_SUCCESS,
            result: user
          });
        }
      });*/
  };
}
