import { Action } from 'redux'
import { IMovie } from 'services'
import { GET_POPULAR_REQUEST, GET_POPULAR_SUCCESS } from 'store/constants'

export interface IGetPopularMoviesRequestAction extends Action {
  type: typeof GET_POPULAR_REQUEST
}

export interface IGetPopularMoviesSuccessAction extends Action {
  type: typeof GET_POPULAR_SUCCESS
  payload: IMovie[]
}

export type PopularMoviesActionTypes =
  | IGetPopularMoviesRequestAction
  | IGetPopularMoviesSuccessAction
