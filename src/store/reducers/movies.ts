import { IMoviesState } from 'store/types/commonTypes'
import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from 'store/constants'
import { MoviesActionTypes } from 'store/types'
import { LoadingState } from 'types'

const initialState: IMoviesState = {
  loading: LoadingState.Idle,
  movies: {
    toprated: [],
    upcoming: [],
    trending: [],
  },
}

export const homeMovieReducer = (
  state = initialState,
  action: MoviesActionTypes
): IMoviesState => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: LoadingState.Succeeded,
      }
    default:
      return state
  }
}
