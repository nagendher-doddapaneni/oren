import { call, takeEvery, put } from 'redux-saga/effects'
import actionTypesConstants from '../constants/actionTypes.constants'
import usersService from '../service/usersList'


export function* handleUsersList() {
    try {
        const response = yield call(usersService.initiateFetchUsersList)
        yield put({
            type: actionTypesConstants.FETCH_USERS_LIST_API_SUCCESS,
            data: response,
            status: 'success'
        })
    } catch (error) {
        yield put({
            type: actionTypesConstants.FETCH_USERS_LIST_API_ERROR,
            data: error.response,
            status: 'error'
        })
    }
}


export default function* watchUsersRequests() {
    yield takeEvery(actionTypesConstants.INITIATE_FETCH_USERS_LIST_API, handleUsersList)
}
