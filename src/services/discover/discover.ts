import {
  ApiService,
  IGenres,
  ILanguage,
  IMovieResponse,
  ITVResponse,
} from 'services'
import { Endpoints } from 'services/discover/endpoints'

const getGenres = async (): Promise<IGenres> => {
  const response = await ApiService.makeRequest<IGenres>(
    { method: 'GET' },
    Endpoints.Genre
  )

  return response
}

const getLanguages = async (): Promise<ILanguage[]> => {
  const response = await ApiService.makeRequest<ILanguage[]>(
    { method: 'GET' },
    Endpoints.Language
  )

  return response
}

const discover = async (params: any): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET', params },
    Endpoints.Discover
  )

  return response
}

const discoverTv = async (params: any): Promise<ITVResponse> => {
  const response = await ApiService.makeRequest<ITVResponse>(
    { method: 'GET', params },
    Endpoints.Tv
  )

  return response
}

const discoverService = {
  discoverTv,
  getGenres,
  getLanguages,
  discover,
}

export default discoverService
