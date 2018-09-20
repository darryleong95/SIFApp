import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Container/Reducers/index'

const initialState = {
    userReview: {
        byHash:{
        },
        byKey: []
    },
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store