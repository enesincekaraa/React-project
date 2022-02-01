import { IObject } from 'types'

export interface ICommonResponse {
  page: number
  total_results: number
  total_pages: number
}

export interface ICommonResults {
  poster_path: string | null
  id: number
  overview: string
  backdrop_path: string | null
  vote_average: number
  genre_ids: number[]
  original_language: string
  vote_count: number
}
export interface IRequestConfig {
  params?: IObject
  body?: IObject
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
}
