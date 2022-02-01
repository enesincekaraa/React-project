import { ApiService } from 'services'
import { Endpoints } from 'services/movie/endpoints'
import {
  ICastResponse,
  IMovieResponse,
  IVideosResponse,
} from 'services/movie/types'

const getPopularMovies = async (): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    Endpoints.Popular
  )
  return response
}

const getTopRatedMovies = async (): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    Endpoints.TopRated
  )
  return response
}

const getUpcomingMovies = async (): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    Endpoints.Upcoming
  )
  return response
}

const getTrendingMovies = async (): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    Endpoints.Trending
  )
  return response
}

const getMovieCast = async (movieId: number): Promise<ICastResponse> => {
  const response = await ApiService.makeRequest<ICastResponse>(
    { method: 'GET' },
    `${Endpoints.Movie}/${movieId}/casts`
  )

  return response
}

const getDetail = async (movieId: number): Promise<any> => {
  const response = await ApiService.makeRequest<any>(
    { method: 'GET' },
    `${Endpoints.Movie}/${movieId}`
  )

  return response
}

const getVideos = async (movieId: number): Promise<IVideosResponse> => {
  const response = await ApiService.makeRequest<IVideosResponse>(
    { method: 'GET' },
    `${Endpoints.Movie}/${movieId}/videos`
  )

  return response
}

const getRecommended = async (movieId: number): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    `${Endpoints.Movie}/${movieId}/recommendations`
  )

  return response
}

const movieService = {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getMovieCast,
  getDetail,
  getVideos,
  getRecommended,
}

export default movieService
