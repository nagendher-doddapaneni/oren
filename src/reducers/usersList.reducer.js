import actionTypesConstants from "../constants/actionTypes.constants"

const INITIAL_STATE = {
  data: null,
  status: ''
}

export function UsersListReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case actionTypesConstants.FETCH_USERS_LIST_API_SUCCESS: {
      return Object.assign({}, state, {
        status: 'success',
        data: action.data
      })
    }
    case actionTypesConstants.FETCH_USERS_LIST_API_ERROR: {
      return Object.assign({}, state, {
        status: 'error',
        data: action.data
      })
    }
    case actionTypesConstants.INITIATE_FETCH_USERS_LIST_API: {
      return INITIAL_STATE
    }
    default: {
      return state
    }
  }
}
