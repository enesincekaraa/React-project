import { IMovies } from 'store/types/commonTypes'
import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from 'store/constants'
import { Action } from 'redux'
export interface IGetMoviesRequestAction extends Action {
  type: typeof GET_MOVIE_REQUEST
}

export interface IGetMoviesSuccessAction extends Action {
  type: typeof GET_MOVIE_SUCCESS
  payload: IMovies
}

export type MoviesActionTypes =
  | IGetMoviesRequestAction
  | IGetMoviesSuccessAction
