import posts from './posts'
import signUp from './signUp'
import User from './User'
import Users from './getUsers'
import workLog from './createUserLogsReducer';
import deleteUser from './deleteUserReducer';
import getUserLogs from './getUserLogs';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({

    posts,
    signUp,
    User,
    Users,
    workLog,
    deleteUser,
    getUserLogs

})

export default rootReducer