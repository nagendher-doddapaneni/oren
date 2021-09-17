import { all } from 'redux-saga/effects'
import watchUsersRequests from './usersList.saga'

export default function* rootSaga() {
    yield all([
        watchUsersRequests()
    ])
}
