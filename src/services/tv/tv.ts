import { ApiService } from 'services'
import { Endpoints } from 'services/tv/endpoints'

const getTvDetail = async (movieId: number): Promise<any> => {
  const response = await ApiService.makeRequest<any>(
    { method: 'GET' },
    `${Endpoints.Tv}/${movieId}`
  )

  return response
}

const getTvCast = async (movieId: number): Promise<any> => {
  const response = await ApiService.makeRequest<any>(
    { method: 'GET' },
    `${Endpoints.Tv}/${movieId}/credits`
  )

  return response
}

const getTvVideos = async (movieId: number): Promise<any> => {
  const response = await ApiService.makeRequest<any>(
    { method: 'GET' },
    `${Endpoints.Tv}/${movieId}/videos`
  )

  return response
}

const getTvRecommendations = async (movieId: number): Promise<any> => {
  const response = await ApiService.makeRequest<any>(
    { method: 'GET' },
    `${Endpoints.Tv}/${movieId}/recommendations`
  )

  return response
}
const tvService = {
  getTvDetail,
  getTvCast,
  getTvVideos,
  getTvRecommendations,
}

export default tvService
