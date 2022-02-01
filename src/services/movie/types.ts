import { ICommonResponse, ICommonResults } from 'services/types'

export interface IMovieResponse extends ICommonResponse {
  results: IMovie[]
}

export interface IMovie extends ICommonResults {
  adult: boolean
  original_title: string
  popularity: number
  release_date: string
  video: false
}

export interface ICastResponse {
  id: number | null
  cast: ICast[]
  crew: ICrew[]
}

interface ICommonCredits {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
}
export interface ICast extends ICommonCredits {
  cast_id: number
  character: string
  order: number
}

export interface ICrew extends ICommonCredits {
  job: string
  department: string
}

export interface IVideo {
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}
export interface IVideosResponse {
  id: number | null
  results: IVideo[]
}

export interface IGenres {
  genres: IGenre[]
}
export interface IGenre {
  id: number | null
  name: string
}

export interface ILanguage {
  iso_639_1: string
  english_name: string
  name: string
}
