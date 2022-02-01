import { IMovie } from 'services'
import { LoadingState } from 'types'

export interface IMovies {
  toprated: IMovie[]
  upcoming: IMovie[]
  trending: IMovie[]
}
export interface IMoviesState {
  loading: LoadingState
  movies: IMovies
}

export interface IMovieState {
  loading: LoadingState
  movies: IMovie[]
}
