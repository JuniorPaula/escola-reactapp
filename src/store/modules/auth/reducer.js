import * as types from '../types';

const intialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...intialState };
      return newState;
    }

    default:
      return state;
  }
}
