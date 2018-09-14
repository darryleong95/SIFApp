import { DO_LOGIN, DO_SIGNUP } from '../Actions/types';

const initialState = {
  // Initalize all user details after login
  loginStatus: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        items: action.payload
      };
    case DO_SIGNUP:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}