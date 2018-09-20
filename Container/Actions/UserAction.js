import { DO_LOGIN, DO_SIGNUP, UPDATE_USER_PROFILE } from './types'
  
export const doUserSignUp = loginData => dispatch => {
  return dispatch({
    type: DO_SIGNUP,
    payload: {
      name: loginData.name,
      email: loginData.email,
      uid: loginData.uid,
      firstTime: loginData.firstTime
    }
  })
};

export const updateUserProfile = updatedData => dispatch => {
  return dispatch({
    type: UPDATE_USER_PROFILE,
    payload: {
      name: updatedData.name,
    }
  })
};