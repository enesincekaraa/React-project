import { AppState } from 'store/store'
import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from 'store/constants'
import { Dispatch } from 'redux'

import {
  IGetMoviesRequestAction,
  IGetMoviesSuccessAction,
  MoviesActionTypes,
} from 'store/types'
import { IMovie, MovieService } from 'services'

const getHomeMoviesRequest = (): IGetMoviesRequestAction => ({
  type: GET_MOVIE_REQUEST,
})

const getHomeMoviesSuccess = (
  toprated: IMovie[],
  upcoming: IMovie[],
  trending: IMovie[]
): IGetMoviesSuccessAction => ({
  type: GET_MOVIE_SUCCESS,
  payload: {
    toprated,
    upcoming,
    trending,
  },
})

export const getHomeMovies =
  () => async (dispatch: Dispatch<MoviesActionTypes>, getState: any) => {
    if (
      (getState() as AppState).movieReducer.homeMovies.movies.toprated
        .length === 0
    ) {
      dispatch(getHomeMoviesRequest())
      const toprated = await MovieService.getTopRatedMovies()
      const upcoming = await MovieService.getUpcomingMovies()
      const trending = await MovieService.getTrendingMovies()
      dispatch(
        getHomeMoviesSuccess(
          toprated.results,
          upcoming.results,
          trending.results
        )
      )
    } else {
      return
    }
  }
