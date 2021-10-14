import posts from './posts'
import signUp from './signUp'
import User from './User'
import Users from './getUsers'
import workLog from './createUserLogsReducer';
import deleteUser from './deleteUserReducer';
import getUserLogs from './getUserLogs';
import UpdateUsers from './updateReducer';
import UpdateUserLogs from './UpdateUserLogsReducer';
import filterData from './filterDataReducer';
import prefferdHours from './prefferedHoursReducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({

    posts,
    signUp,
    User,
    Users,
    workLog,
    deleteUser,
    getUserLogs,
    UpdateUsers,
    UpdateUserLogs,
    filterData,
    prefferdHours

})

export default rootReducer