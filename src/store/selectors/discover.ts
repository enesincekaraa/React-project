import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { filterMovie, filterTv } from 'store/selectors/common'

export const getDiscover = (state: AppState) =>
  state.movieReducer.discoverReducer

export const getDiscoverSelector = createSelector(getDiscover, (discover) => {
  const loading = discover.loading
  const genres = discover.genres
  const years = discover.years
  const languages = discover.languages
  const optionsLoading = discover.optionsLoading
  const loadMoreLoading = discover.loadMoreLoading
  const page = discover.page
  const movies = filterMovie(discover.movies)
  const tv = filterTv(discover.tv)

  return {
    loading,
    genres,
    years,
    languages,
    optionsLoading,
    movies,
    tv,
    loadMoreLoading,
    page,
  }
})
