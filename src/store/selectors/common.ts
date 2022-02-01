import { IMovie, ITV } from 'services'
import { ICommonResults } from 'services/types'

export const filterMovie = (movies: IMovie[]) => {
  const filtered = filter(movies)

  return filtered as IMovie[]
}

export const filterTv = (tv: ITV[]) => {
  const filtered = filter(tv)

  return filtered as ITV[]
}

const filter = (arr: any) => {
  const filtered = arr.filter(
    (item: ICommonResults) =>
      item.backdrop_path !== null && item.poster_path !== null
  )

  return filtered
}
export const sortMovie = (movies: IMovie[]) => {
  const filtered = filterMovie(movies)
  const shuffled = filtered.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, 10)

  return selected
}
