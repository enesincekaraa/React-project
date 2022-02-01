import toast from 'react-hot-toast'
import { AUTH_REQUEST, AUTH_SUCCESS } from '../constants'
import {
  AuthActionTypes,
  IAuthErrorAction,
  IAuthRequestAction,
  IAuthSuccessAction,
} from '../types'
import { Dispatch } from 'redux'
import { AUTH_ERROR } from 'store'
import { history } from 'utils'
import { AuthService } from 'services'

export const authRequest = (): IAuthRequestAction => ({
  type: AUTH_REQUEST,
})

export const authSuccess = (user: any): IAuthSuccessAction => ({
  type: AUTH_SUCCESS,
  payload: user,
})

const authError = (error: any): IAuthErrorAction => ({
  type: AUTH_ERROR,
  payload: error,
})

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(authRequest())

    try {
      await AuthService.loginWithEmailAndPassword(email, password)
      toast.success('Login is successful')
      history.push('/')
    } catch (error) {
      dispatch(authError(error))
    }
  }

export const loginWithGoogle =
  () => async (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(authRequest())

    try {
      await AuthService.loginWithGoogle()
      toast.success('Login is successful')
      history.push('/')
    } catch (error) {
      dispatch(authError(error))
    }
  }
