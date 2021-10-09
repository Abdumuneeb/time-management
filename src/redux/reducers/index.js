import posts from './posts'
import signUp from './signUp'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({

    posts,
    signUp,
    
})

export default rootReducer