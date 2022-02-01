import { Dispatch } from 'redux'
import { IMovie, MovieService } from 'services'
import { GET_POPULAR_SUCCESS, GET_POPULAR_REQUEST } from 'store/constants'
import {
  IGetPopularMoviesRequestAction,
  IGetPopularMoviesSuccessAction,
  PopularMoviesActionTypes,
} from 'store/types/popular'

const getPopularMoviesRequest = (): IGetPopularMoviesRequestAction => ({
  type: GET_POPULAR_REQUEST,
})

const getPopularMoviesSuccess = (
  movies: IMovie[]
): IGetPopularMoviesSuccessAction => ({
  type: GET_POPULAR_SUCCESS,
  payload: movies,
})

export const getPopularMovies =
  () => async (dispatch: Dispatch<PopularMoviesActionTypes>) => {
    try {
      dispatch(getPopularMoviesRequest())

      const response = await MovieService.getPopularMovies()
      dispatch(getPopularMoviesSuccess(response.results))
    } catch (err) {
      return
    }
  }
