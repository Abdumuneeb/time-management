import postActions from './postActions';
import signupAction from './signupAction';
import userAction from './userAction';
import getUser from './getUser';
import createLogs from './createUserLogsAction';
import deleteUser from './deleteUserActions';
import getUserLogs from './getUserLogs';
import UpdateUsers from './updateAction';
import updateUserLogs from './UpdateUserLogsAction';
import filterData from './filterDataAction';
import prefferedHours from './prefferedHoursAction';

const allActions = {
    postActions,
    signupAction,
    userAction,
    getUser,
    createLogs,
    deleteUser,
    getUserLogs,
    UpdateUsers,
    updateUserLogs,
    filterData,
    prefferedHours

}

export default allActions;