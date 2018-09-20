import { CREATE_USER_REVIEW, UPDATE_USER_REVIEW, DELETE_USER_REVIEW } from '../Actions/types'

initialState = {
    byHash:{
        '1':{
            feedback: '',
            rating: '',
            date: ''
        },
        '2':{
            feedback: '',
            rating: '',
            date: ''
        }
    },
    byKey: []
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_USER_REVIEW: {
            console.log(state)
            state = {
                byKey:[...state.byKey, action.reviewKey],
                byHash: {
                    ...state.byHash,
                    [action.reviewKey]: {
                        ...action.payload
                    }
                }
            }
            console.log(state)
            return {
                ...state
            }
        }
        case UPDATE_USER_REVIEW: {
            state = {
                byKey:[...state.byKey],
                byHash: {
                    ...state.byHash,
                    [action.reviewKey]: {
                        ...action.payload
                    }
                }
            }
            console.log(state)
            return {
                state
            }
        }
        case DELETE_USER_REVIEW: {
            const newHash = state.byHash
            delete newHash[action.reviewKey]
            state  = {
                byKey: state.byKey.filter(key => key !== action.reviewKey),
                byHash: newHash
            }
            console.log(state)
            return {
               state
            }
        }
        default:
            return state
    }
}