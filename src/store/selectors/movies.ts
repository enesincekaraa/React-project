import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { sortMovie } from 'store/selectors/common'

const getHomeMovies = (state: AppState) => state.movieReducer.homeMovies

export const getHomeMoviesSelector = createSelector(
  getHomeMovies,
  (homeMovies) => {
    const toprated = sortMovie(homeMovies.movies.toprated)
    const trending = sortMovie(homeMovies.movies.trending)
    const upcoming = sortMovie(homeMovies.movies.upcoming)
    const loading = homeMovies.loading
    return { toprated, trending, upcoming, loading }
  }
)
