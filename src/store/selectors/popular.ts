import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { sortMovie } from 'store/selectors/common'

export const getPopularMoviesSelector = (state: AppState) =>
  state.movieReducer.popularMovies.movies

export const getSliderMoviesSelector = createSelector(
  getPopularMoviesSelector,
  (movies) => {
    const filtered = sortMovie(movies)

    return filtered
  }
)
