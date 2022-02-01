import { Action } from 'redux'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
  REMOVE_FAVORITE_ERROR,
  REMOVE_FAVORITE_REQUEST,
  REMOVE_FAVORITE_SUCCESS,
  RESET_FAVORITES,
} from 'store/constants'
import { LoadingState } from 'types'

export interface IUserState {
  favorites: {
    addOrRemoveloading: any
    data: any
    loading: LoadingState
  }
}

export interface IAddFavoriteRequestAction extends Action {
  type: typeof ADD_FAVORITE_REQUEST
  payload: number
}

export interface IAddFavoriteSuccessAction extends Action {
  type: typeof ADD_FAVORITE_SUCCESS
  payload: any
}

export interface IAddFavoriteErrorAction extends Action {
  type: typeof ADD_FAVORITE_ERROR
  payload: number
}

export interface IRemoveFavoriteRequestAction extends Action {
  type: typeof REMOVE_FAVORITE_REQUEST
  payload: number
}

export interface IRemoveFavoriteSuccessAction extends Action {
  type: typeof REMOVE_FAVORITE_SUCCESS
  payload: any
}

export interface IRemoveFavoriteErrorAction extends Action {
  type: typeof REMOVE_FAVORITE_ERROR
  payload: number
}

export interface IGetFavoritesRequestAction extends Action {
  type: typeof GET_FAVORITES_REQUEST
}

export interface IGetFavoritesSuccessAction extends Action {
  type: typeof GET_FAVORITES_SUCCESS
  payload: []
}

export interface IGetFavoritesErrorAction extends Action {
  type: typeof GET_FAVORITES_ERROR
}

export interface IResetFavoritesAction extends Action {
  type: typeof RESET_FAVORITES
}

export type UserActionTypes =
  | IAddFavoriteRequestAction
  | IAddFavoriteSuccessAction
  | IAddFavoriteErrorAction
  | IRemoveFavoriteErrorAction
  | IRemoveFavoriteRequestAction
  | IRemoveFavoriteSuccessAction
  | IGetFavoritesRequestAction
  | IGetFavoritesSuccessAction
  | IGetFavoritesErrorAction
  | IResetFavoritesAction
