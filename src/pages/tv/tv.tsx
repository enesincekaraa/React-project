import {
  Loading,
  Movies,
  Filter,
  FilterTypes,
  Text,
  TvSeries,
} from 'components'
import { useDiscover, useDiscoverParams } from 'hooks'
import React from 'react'
import { LoadingState } from 'types'
import { NoDataContainer } from 'pages/films/style'

export const Tv = () => {
  const { discover } = useDiscover()
  const { loading, tv } = discover
  const { onChange } = useDiscoverParams(
    {
      imdb: '',
      genre: '',
      year: '',
      language: '',
    },
    FilterTypes.Tv
  )

  return (
    <>
      <Filter onChange={onChange} type={FilterTypes.Tv} />
      {loading === LoadingState.Loading ? (
        <Loading />
      ) : tv.length === 0 ? (
        <NoDataContainer>
          <Text size='medium' text='Geçerli Tv Show Verisi Bulunamadı' />
        </NoDataContainer>
      ) : (
        <Movies wrap>
          <TvSeries tvSeries={tv} />
        </Movies>
      )}
    </>
  )
}
