import { IMovie } from 'services'

import { GET_POPULAR_REQUEST, GET_POPULAR_SUCCESS } from 'store/constants'
import { PopularMoviesActionTypes } from 'store/types/popular'
import { LoadingState } from 'types'

const initialState: { loading: LoadingState; movies: IMovie[] } = {
  loading: LoadingState.Idle,
  movies: [],
}

export const popularMovieReducer = (
  state = initialState,
  action: PopularMoviesActionTypes
): { loading: LoadingState; movies: IMovie[] } => {
  switch (action.type) {
    case GET_POPULAR_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: LoadingState.Succeeded,
      }
    default:
      return state
  }
}
