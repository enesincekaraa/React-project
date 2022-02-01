import React, { ReactElement, useEffect } from 'react'

import { HomeSlider } from 'pages/home/components/slider'
import { FilmSeries, Movies } from 'components/movies/movies'
import { FilmsContainer } from 'pages/home/style'
import { useDispatch } from 'react-redux'
import { getHomeMovies } from 'store/actions/movies'
import { useMovie } from 'hooks'
import { LoadingState } from 'types'
import { Loading } from 'components'

export const Home = (): ReactElement => {
  const { homeMovies } = useMovie()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHomeMovies())
  }, [])

  return (
    <>
      <HomeSlider />

      {homeMovies.loading !== LoadingState.Loading ? (
        <FilmsContainer>
          <Movies title='Top Rated'>
            <FilmSeries films={homeMovies.toprated} />
          </Movies>
          <Movies title='Trending'>
            <FilmSeries films={homeMovies.trending} />
          </Movies>
          <Movies title='Upcoming'>
            <FilmSeries films={homeMovies.upcoming} />
          </Movies>
        </FilmsContainer>
      ) : (
        <Loading />
      )}
    </>
  )
}
