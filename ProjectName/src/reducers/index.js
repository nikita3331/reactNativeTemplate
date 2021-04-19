import { combineReducers } from 'redux'
import {
    UPDATE_KEY,
} from '../actions/user'


const user = (state = { authKey: null}, action) => {
    switch (action.type) {
        case UPDATE_KEY:
            return { ...state, authKey: action.payload }                    
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer
