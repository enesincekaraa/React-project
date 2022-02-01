import { useTypedSelector } from './../store/store'
import { getSliderMoviesSelector, getHomeMoviesSelector } from 'store'
import { shallowEqual } from 'react-redux'

export const useMovie = () => {
  const sliderMovies = useTypedSelector(getSliderMoviesSelector, shallowEqual)
  const homeMovies = useTypedSelector(getHomeMoviesSelector, shallowEqual)

  return { sliderMovies, homeMovies }
}
