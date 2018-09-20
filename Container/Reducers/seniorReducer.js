import { CREATE_SENIOR_PROFILE, UPDATE_SENIOR_PROFILE } from '../Actions/types'

initialState = {
    name: '',
    email: '',
    contactNo: '',
    seniorKey: ''
}

export default function(state= initialState, action){
    switch(action.type){
        case CREATE_SENIOR_PROFILE:
            state = {
                ...action.payload
            }
            console.log(state)
            return {
                ...action.payload
            };
        case UPDATE_SENIOR_PROFILE:
            state = {
                ...action.payload
            }
            console.log(state)
            return {
                ...action.payload
            };
        default:
            return state
    }
}