import { Action } from 'redux'
import { AUTH_REQUEST, AUTH_SUCCESS } from '../constants'
import { LoadingState } from '../../types'
import { AUTH_ERROR } from 'store'
import firebase from 'firebase/compat/app'

export interface IAuthState {
  user: firebase.User | null
  loading: LoadingState
}

export interface IAuthRequestAction extends Action {
  type: typeof AUTH_REQUEST
}

export interface IAuthSuccessAction extends Action {
  type: typeof AUTH_SUCCESS
  payload: any
}

export interface IAuthErrorAction extends Action {
  type: typeof AUTH_ERROR
  payload: any
}

export type AuthActionTypes =
  | IAuthRequestAction
  | IAuthSuccessAction
  | IAuthErrorAction
