import { Dispatch } from 'redux'
import { IGenre, ILanguage, IMovie } from 'services'
import {
  DISCOVER_REQUEST,
  DISCOVER_SUCCESS,
  DISCOVER_TV_SUCCESS,
  LOAD_MORE_REQUEST,
  OPTIONS_REQUEST,
  OPTIONS_SUCCESS,
  RESET_LIST,
  RESET_PAGE,
  SET_PAGE,
} from 'store/constants'
import {
  DiscoverActionTypes,
  IDiscoverLoadMoreRequestAction,
  IDiscoverOptionsRequestAction,
  IDiscoverOptionsSuccessAction,
  IDiscoverRequestAction,
  IDiscoverResetListAction,
  IDiscoverResetPageAction,
  IDiscoverSetPageAction,
  IDiscoverSuccessAction,
  IDiscoverTvSuccessAction,
} from 'store/types'
import { AppState } from 'store/store'
import { DiscoverService, ITV } from 'services/discover'

const discoverRequest = (): IDiscoverRequestAction => ({
  type: DISCOVER_REQUEST,
})

const getOptionsRequest = (): IDiscoverOptionsRequestAction => ({
  type: OPTIONS_REQUEST,
})

const discoverSuccess = (movies: IMovie[]): IDiscoverSuccessAction => ({
  type: DISCOVER_SUCCESS,
  payload: movies,
})

const discoverTvSuccess = (tv: ITV[]): IDiscoverTvSuccessAction => ({
  type: DISCOVER_TV_SUCCESS,
  payload: tv,
})

const getOptionsSuccess = (
  genres: IGenre[],
  languages: ILanguage[]
): IDiscoverOptionsSuccessAction => ({
  type: OPTIONS_SUCCESS,
  payload: { genres: genres, years: [], languages: languages },
})

const loadMoreRequest = (): IDiscoverLoadMoreRequestAction => ({
  type: LOAD_MORE_REQUEST,
})

export const resetPage = (): IDiscoverResetPageAction => ({
  type: RESET_PAGE,
})

export const resetList = (): IDiscoverResetListAction => ({
  type: RESET_LIST,
})

export const setPage = (type: any): IDiscoverSetPageAction => ({
  type: SET_PAGE,
  payload: type,
})

// const loadMoreTvSuccess= (tv: ITV[]) : IDiscoverLoadMoreTvSuccessAction => ({
//   type: LOAD_MORE_TV_SUCCESS,
//   payload: tv
// })

// const loadMoreMovieSuccess= (movies: IMovie[]) : IDiscoverLoadMoreMovieSuccessAction => ({
//   type: LOAD_MORE_MOVIE_SUCCESS,
//   payload: movies
// })

// export const loadMoreTv = (params: any) => async (dispatch: Dispatch<DiscoverActionTypes>, getState: any) => {

//   dispatch(loadMoreRequest())
//   const response = await DiscoverService.discoverTv(params)

//   dispatch(loadMoreTvSuccess(response.results))
// }

// export const loadMoreMovie = (params: any) => async (dispatch: Dispatch<DiscoverActionTypes>, getState: any) => {

//   dispatch(loadMoreRequest())
//   const response = await DiscoverService.discover(params)

//   dispatch(loadMoreMovieSuccess(response.results))
// }

export const discover =
  (params: any) =>
  async (dispatch: Dispatch<DiscoverActionTypes>, getState: any) => {
    const page = (getState() as AppState).movieReducer.discoverReducer.page
      .movie
    if (page > 1) {
      dispatch(loadMoreRequest())
    } else {
      dispatch(discoverRequest())
    }

    const response = await DiscoverService.discover({ ...params, page })
    dispatch(discoverSuccess(response.results))
  }

export const discoverTv =
  (params: any) =>
  async (dispatch: Dispatch<DiscoverActionTypes>, getState: any) => {
    const page = (getState() as AppState).movieReducer.discoverReducer.page.tv

    if (page > 1) {
      dispatch(loadMoreRequest())
    } else {
      dispatch(discoverRequest())
    }
    const response = await DiscoverService.discoverTv({ ...params, page })
    dispatch(discoverTvSuccess(response.results))
  }

export const getOptions =
  () => async (dispatch: Dispatch<DiscoverActionTypes>, getState: any) => {
    if (
      (getState() as AppState).movieReducer.discoverReducer.genres.length === 0
    ) {
      dispatch(getOptionsRequest())

      const genres = await DiscoverService.getGenres()
      const languages = await DiscoverService.getLanguages()

      dispatch(getOptionsSuccess(genres.genres, languages))
    }
  }
