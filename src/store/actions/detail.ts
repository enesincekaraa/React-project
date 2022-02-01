import {
  CLEAR_DETAIL,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
} from 'store/constants'
import { Dispatch } from 'redux'

import {
  DetailActionTypes,
  IClearDetailAction,
  IDetail,
  IGetDetailRequestAction,
  IGetDetailSuccessAction,
} from 'store/types'
import { MovieService } from 'services'
import { TvService } from 'services/tv'
//TODO:
// store
// actions
//     detail.ts
const getDetailRequest = (): IGetDetailRequestAction => ({
  type: GET_DETAIL_REQUEST,
})

export const clearDetail = (): IClearDetailAction => ({
  type: CLEAR_DETAIL,
})

const getDetailSuccess = (data: IDetail): IGetDetailSuccessAction => ({
  type: GET_DETAIL_SUCCESS,
  payload: data,
})

export const getDetail =
  (movieId: number) => async (dispatch: Dispatch<DetailActionTypes>) => {
    dispatch(getDetailRequest())

    const detail = await MovieService.getDetail(movieId)
    const casts = await MovieService.getMovieCast(movieId)
    const videos = await MovieService.getVideos(movieId)
    const recommended = await MovieService.getRecommended(movieId)

    dispatch(
      getDetailSuccess({
        detail,
        casts,
        videos,
        recommended: recommended.results,
      })
    )
  }

export const getTvDetail =
  (movieId: number) => async (dispatch: Dispatch<DetailActionTypes>) => {
    dispatch(getDetailRequest())

    const detail = await TvService.getTvDetail(movieId)
    const casts = await TvService.getTvCast(movieId)
    const videos = await TvService.getTvVideos(movieId)
    const recommended = await TvService.getTvRecommendations(movieId)

    dispatch(
      getDetailSuccess({
        detail,
        casts,
        videos,
        recommended: recommended.results,
      })
    )
  }
