import { ICommonResponse, ICommonResults } from 'services/types'

export interface ITV extends ICommonResults {
  popularity: number
  first_air_date: string
  origin_country: string[]
  name: string
  original_name: string
}

export interface ITVResponse extends ICommonResponse {
  results: ITV[]
}
