import React, { useEffect } from 'react'
import { useUser } from 'hooks'
import { useDispatch } from 'react-redux'
import { getFavorites, resetFavorites } from 'store'
import { LoadingState } from 'types'
import { FilmSeries, Loading, Movies } from 'components'

export const Favorites = () => {
  const dispatch = useDispatch()
  const { favorites, favoritesLoading } = useUser()
  useEffect(() => {
    dispatch(getFavorites())

    return () => {
      dispatch(resetFavorites())
    }
  }, [])

  if (favoritesLoading === LoadingState.Loading) {
    return <Loading />
  }
  return (
    favoritesLoading === LoadingState.Succeeded &&
    favorites && (
      <Movies title='Favorites'>
        <FilmSeries films={favorites} />
      </Movies>
    )
  )
}
