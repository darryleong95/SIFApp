import { combineReducers } from 'redux'
import userReducer from './userReducer'
import userReviewReducer from './userReviewReducer'
import seniorReducer from './seniorReducer'
import loginReducer from './loginReducer'
import classReducer from './classReducer'
import classReviewReducer from './classReviewReducer'

export default combineReducers({
    // user: userReducer,
    senior: seniorReducer,
    // class: classReducer,
    userReview: userReviewReducer,
    // classReview: classReviewReducer,
    login: loginReducer
})