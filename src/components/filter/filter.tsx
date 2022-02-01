import React from 'react'
import { Select } from 'components'
import { useDiscover } from 'hooks'
import { Container } from 'components/filter/style'

export enum FilterTypes {
  Movie = 'movie',
  Tv = 'tv',
}
export const Filter = ({
  onChange,
  type = FilterTypes.Movie,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}: any) => {
  const { discover } = useDiscover()
  const { optionsLoading, genres, years, languages } = discover

  return (
    <Container>
      <Select name='imdb' defaultValue='' onChange={onChange}>
        <Select.Option value=''>imdb</Select.Option>
        <Select.Option value='5'>+5</Select.Option>
        <Select.Option value='7'>+7</Select.Option>
      </Select>
      <Select
        loading={optionsLoading}
        name='genre'
        defaultValue=''
        onChange={onChange}
      >
        <Select.Option value=''>genres</Select.Option>
        {genres.map((item) => (
          <Select.Option key={item.id} value={item.id as number}>
            {item.name}
          </Select.Option>
        ))}
      </Select>

      <Select
        loading={optionsLoading}
        name='year'
        defaultValue=''
        onChange={onChange}
      >
        <Select.Option value=''>years</Select.Option>
        {years.map((item, index) => (
          <Select.Option key={index} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>

      <Select
        loading={optionsLoading}
        name='language'
        defaultValue=''
        onChange={onChange}
      >
        <Select.Option value=''>languages</Select.Option>
        {languages.map((item) => (
          <Select.Option key={item.iso_639_1} value={item.iso_639_1}>
            {item.english_name}
          </Select.Option>
        ))}
      </Select>

      {type === FilterTypes.Movie && (
        <Select name='adult' defaultValue='' onChange={onChange}>
          <Select.Option value=''>adult</Select.Option>
          <Select.Option value='true'>Yes</Select.Option>
          <Select.Option value='false'>No</Select.Option>
        </Select>
      )}
    </Container>
  )
}
