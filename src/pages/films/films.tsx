import {
  Loading,
  Movies,
  Filter,
  FilterTypes,
  Text,
  FilmSeries,
} from 'components'
import { useDiscover, useDiscoverParams } from 'hooks'
import React from 'react'
import { LoadingState } from 'types'
import {
  NoDataContainer,
  LoadMoreButton,
  LoadMoreButtonContainer,
} from 'pages/films/style'

export const Films = () => {
  const { discover } = useDiscover()
  const { loading, movies, loadMoreLoading } = discover
  const { onChange, loadMore } = useDiscoverParams(
    {
      imdb: '',
      genre: '',
      year: '',
      language: '',
      adult: '',
    },
    FilterTypes.Movie
  )

  return (
    <>
      <Filter onChange={onChange} type={FilterTypes.Movie} />
      {loading === LoadingState.Loading ? (
        <Loading />
      ) : movies.length === 0 ? (
        <NoDataContainer>
          <Text size='medium' text='Geçerli Film Verisi Bulunamadı' />
        </NoDataContainer>
      ) : (
        <>
          <Movies wrap>
            <FilmSeries films={movies} />
            {loadMoreLoading === LoadingState.Loading && <Loading />}
          </Movies>
          <LoadMoreButtonContainer>
            <LoadMoreButton onClick={loadMore}>LOAD MORE</LoadMoreButton>
          </LoadMoreButtonContainer>
        </>
      )}
    </>
  )
}
