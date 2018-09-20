import { DO_USER_LOGIN } from '../Actions/types';

const initialState = {
  name: '',
  email: '',
  uid: '',
  firstTime: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DO_SIGNUP:
      return {
        ...state,
        name: action.payload.name,
        uid: action.payload.uid,
        email: action.payload.email,
        firstTime: action.payload.firstTime,
      }
    default:
      return state;
  }
}