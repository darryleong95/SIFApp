import { LOGIN_TYPE, DO_USER_LOGIN, DO_SENIOR_LOGIN } from '../Actions/types'

initialState = {
    loginType: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_TYPE: {
            state = {
                loginType: action.loginType
            }
            // console.log(state)
            return {
                ...state
            }
        }
        case DO_USER_LOGIN: {
            return {
                ...action.payload
            }; 
        }
        case DO_SENIOR_LOGIN: {
            state = {
                ...action.payload
            }
            console.log(state)
            return {
                state
            };
        }
        default:
         return state
    }
}