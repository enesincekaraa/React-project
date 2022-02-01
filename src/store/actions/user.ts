import toast from 'react-hot-toast'
import { Dispatch } from 'redux'
import { UserService } from 'services'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
} from 'store/constants'
import {
  IGetFavoritesErrorAction,
  IGetFavoritesRequestAction,
  IGetFavoritesSuccessAction,
  UserActionTypes,
  IAddFavoriteRequestAction,
  IAddFavoriteSuccessAction,
  IAddFavoriteErrorAction,
  IResetFavoritesAction,
  IRemoveFavoriteSuccessAction,
} from 'store/types/user'
import { AppState } from 'store/store'
import { REMOVE_FAVORITE_SUCCESS, RESET_FAVORITES } from 'store'

export const addFavoriteRequest = (id: number): IAddFavoriteRequestAction => ({
  type: ADD_FAVORITE_REQUEST,
  payload: id,
})

export const addFavoriteSuccess = (data: any): IAddFavoriteSuccessAction => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: data,
})

const addFavoriteError = (id: number): IAddFavoriteErrorAction => ({
  type: ADD_FAVORITE_ERROR,
  payload: id,
})

export const removeFavoriteSuccess = (
  data: any
): IRemoveFavoriteSuccessAction => ({
  type: REMOVE_FAVORITE_SUCCESS,
  payload: data,
})
export const getFavoritesRequest = (): IGetFavoritesRequestAction => ({
  type: GET_FAVORITES_REQUEST,
})

export const getFavoritesSuccess = (data: any): IGetFavoritesSuccessAction => ({
  type: GET_FAVORITES_SUCCESS,
  payload: data,
})

const getFavoritesError = (): IGetFavoritesErrorAction => ({
  type: GET_FAVORITES_ERROR,
})

export const resetFavorites = (): IResetFavoritesAction => ({
  type: RESET_FAVORITES,
})

export const addFavorite =
  (data: any) => async (dispatch: Dispatch<UserActionTypes>, getState: any) => {
    const { id } = data
    dispatch(addFavoriteRequest(id))
    const uuid = (getState() as AppState).authReducer.user?.uid || ''
    try {
      await UserService.addFavorite(data, uuid)
      dispatch(addFavoriteSuccess(data))
      toast.success('Added to the favorite list')
    } catch (error) {
      dispatch(addFavoriteError(id))
    }
  }

export const removeFavorite =
  (data: any) => async (dispatch: Dispatch<UserActionTypes>, getState: any) => {
    const { id } = data
    dispatch(addFavoriteRequest(id))
    const uuid = (getState() as AppState).authReducer.user?.uid || ''
    try {
      await UserService.removeFavorite(data, uuid)
      dispatch(removeFavoriteSuccess(data))
      toast.success('Removed from the favorite list')
    } catch (error) {
      dispatch(addFavoriteError(id))
    }
  }

export const getFavorites =
  () => async (dispatch: Dispatch<UserActionTypes>, getState: any) => {
    dispatch(getFavoritesRequest())
    const uuid = (getState() as AppState).authReducer.user?.uid || ''

    try {
      const favorites = UserService.getFavorites(uuid)
      if (!(await favorites).exists()) {
        dispatch(getFavoritesError())
      }
      dispatch(getFavoritesSuccess((await favorites).data()?.movies))
    } catch (error) {
      dispatch(getFavoritesError())
    }
  }
