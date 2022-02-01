import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  CLEAR_DETAIL,
} from 'store/constants'
import { DetailActionTypes, IDetailState } from 'store/types'
import { LoadingState } from 'types'

const initialState: IDetailState = {
  loading: LoadingState.Idle,
  casts: {
    id: null,
    cast: [],
    crew: [],
  },
  detail: [],
  videos: {
    id: null,
    results: [],
  },
  recommended: [],
}

export const detailReducer = (
  state = initialState,
  action: DetailActionTypes
): IDetailState => {
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
        detail: [],
      }
    case CLEAR_DETAIL:
      return initialState

    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        loading: LoadingState.Succeeded,
        casts: action.payload.casts,
        detail: action.payload.detail,
        videos: action.payload.videos,
        recommended: action.payload.recommended,
      }
    default:
      return state
  }
}
