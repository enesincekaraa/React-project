import { LoadingState } from 'types'
import { AuthActionTypes, IAuthState } from '../types/auth'
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from '../constants'

const initialState: IAuthState = {
  user: null,
  loading: LoadingState.Idle,
}

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: LoadingState.Succeeded,
      }
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        loading: LoadingState.Succeeded,
      }
    default:
      return state
  }
}
