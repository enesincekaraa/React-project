import {
  CLEAR_DETAIL,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_TV_DETAIL_REQUEST,
} from '../constants'
import { Action } from 'redux'
import { LoadingState } from 'types'
import { ICastResponse, IMovie, IVideosResponse } from 'services'

export interface IDetail {
  videos: IVideosResponse
  detail: any
  casts: ICastResponse
  recommended: IMovie[] | []
}

export interface IDetailState extends IDetail {
  loading: LoadingState
}
export interface IGetDetailRequestAction extends Action {
  type: typeof GET_DETAIL_REQUEST
}

export interface IGetTvDetailRequestAction extends Action {
  type: typeof GET_TV_DETAIL_REQUEST
}

export interface IClearDetailAction extends Action {
  type: typeof CLEAR_DETAIL
}

export interface IGetDetailSuccessAction extends Action {
  type: typeof GET_DETAIL_SUCCESS
  payload: IDetail
}

export type DetailActionTypes =
  | IGetDetailRequestAction
  | IGetDetailSuccessAction
  | IClearDetailAction
  | IGetTvDetailRequestAction
