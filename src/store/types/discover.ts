import { IMovieState } from 'store/types/commonTypes'
import { Action } from 'redux'
import { IGenre, ILanguage, IMovie, ITV } from 'services'
import {
  DISCOVER_REQUEST,
  DISCOVER_SUCCESS,
  DISCOVER_TV_SUCCESS,
  LOAD_MORE_MOVIE_SUCCESS,
  LOAD_MORE_REQUEST,
  LOAD_MORE_TV_SUCCESS,
  OPTIONS_REQUEST,
  OPTIONS_SUCCESS,
  RESET_LIST,
  RESET_PAGE,
  SET_PAGE,
} from 'store/constants'
import { LoadingState } from 'types'

export interface IDiscoverState extends IMovieState {
  genres: IGenre[]
  years: number[]
  languages: ILanguage[]
  optionsLoading: LoadingState
  loadMoreLoading: LoadingState
  page: any
  tv: ITV[]
}

export interface IDiscoverRequestAction extends Action {
  type: typeof DISCOVER_REQUEST
}

export interface IDiscoverOptionsRequestAction extends Action {
  type: typeof OPTIONS_REQUEST
}

export interface IDiscoverSuccessAction extends Action {
  type: typeof DISCOVER_SUCCESS
  payload: IMovie[]
}

export interface IDiscoverTvSuccessAction extends Action {
  type: typeof DISCOVER_TV_SUCCESS
  payload: ITV[]
}

export interface IDiscoverOptionsSuccessAction extends Action {
  type: typeof OPTIONS_SUCCESS
  payload: { genres: IGenre[]; years?: number[]; languages: ILanguage[] }
}

export interface IDiscoverLoadMoreRequestAction extends Action {
  type: typeof LOAD_MORE_REQUEST
}

export interface IDiscoverLoadMoreTvSuccessAction extends Action {
  type: typeof LOAD_MORE_TV_SUCCESS
  payload: ITV[]
}

export interface IDiscoverLoadMoreMovieSuccessAction extends Action {
  type: typeof LOAD_MORE_MOVIE_SUCCESS
  payload: IMovie[]
}

export interface IDiscoverResetPageAction extends Action {
  type: typeof RESET_PAGE
}

export interface IDiscoverResetListAction extends Action {
  type: typeof RESET_LIST
}

export interface IDiscoverSetPageAction extends Action {
  type: typeof SET_PAGE
  payload: any
}

export type DiscoverActionTypes =
  | IDiscoverRequestAction
  | IDiscoverSuccessAction
  | IDiscoverTvSuccessAction
  | IDiscoverOptionsRequestAction
  | IDiscoverOptionsSuccessAction
  | IDiscoverLoadMoreRequestAction
  | IDiscoverLoadMoreTvSuccessAction
  | IDiscoverLoadMoreMovieSuccessAction
  | IDiscoverResetPageAction
  | IDiscoverResetListAction
  | IDiscoverSetPageAction
