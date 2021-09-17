import { combineReducers } from 'redux'
import { UsersListReducer } from './usersList.reducer'

const appReducer = combineReducers({
    usersList: UsersListReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer