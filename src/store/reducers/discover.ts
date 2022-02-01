import { LoadingState } from 'types'
import { DiscoverActionTypes, IDiscoverState } from 'store/types'
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

const initialState: IDiscoverState = {
  loading: LoadingState.Idle,
  movies: [],
  tv: [],
  optionsLoading: LoadingState.Idle,
  loadMoreLoading: LoadingState.Idle,
  genres: [],
  years: [],
  languages: [],
  page: {
    movie: 1,
    tv: 1,
  },
}

export const discoverReducer = (
  state = initialState,
  action: DiscoverActionTypes
): IDiscoverState => {
  switch (action.type) {
    case DISCOVER_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case OPTIONS_REQUEST:
      return {
        ...state,
        optionsLoading: LoadingState.Loading,
      }

    case DISCOVER_SUCCESS:
      return {
        ...state,
        loading: LoadingState.Succeeded,
        loadMoreLoading: LoadingState.Succeeded,
        movies: [...state.movies, ...action.payload],
      }
    case DISCOVER_TV_SUCCESS:
      return {
        ...state,
        loading: LoadingState.Succeeded,
        loadMoreLoading: LoadingState.Succeeded,
        tv: [...state.tv, ...action.payload],
      }
    case LOAD_MORE_REQUEST:
      return {
        ...state,
        loadMoreLoading: LoadingState.Loading,
      }
    case SET_PAGE: {
      return {
        ...state,
        page: {
          ...state.page,
          [action.payload]: state.page[action.payload] + 1,
        },
      }
    }
    case RESET_PAGE:
      return {
        ...state,
        page: {
          ...state.page,
          movie: 1,
          tv: 1,
        },
      }
    case RESET_LIST:
      return {
        ...state,
        movies: [],
        tv: [],
      }
    case OPTIONS_SUCCESS:
      return {
        ...state,
        optionsLoading: LoadingState.Succeeded,
        genres: action.payload.genres,
        years: action.payload.years || [],
        languages: action.payload.languages,
      }
    default:
      return state
  }
}
