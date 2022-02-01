import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  discover,
  discoverTv,
  getOptions,
  resetList,
  resetPage,
  setPage,
} from 'store/actions/discover'
import { FilterTypes } from 'components'
import { useFirstRender } from 'hooks'

interface IDiscoverProps {
  [key: string]: string
}
export const useDiscoverParams = (
  initialValues: IDiscoverProps,
  type: FilterTypes
) => {
  const [value, setValue] = useState(initialValues)
  const firstRender = useFirstRender()
  const dispatch = useDispatch()
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target

    setValue((prev: any) => ({ ...prev, [name]: value }))
  }

  const isEmpty = (value: string) => {
    return value !== '' ? true : false
  }

  const loadMore = () => {
    dispatch(setPage(type))
    populateParams()
  }

  const populateCommonParams = () => {
    const params = {
      ...(isEmpty(value.imdb) && { 'vote_average.gte': value.imdb }),
      ...(isEmpty(value.genre) && { with_genres: value.genre }),
      ...(isEmpty(value.year) && { primary_release_year: value.year }),
      ...(isEmpty(value.language) && {
        with_original_language: value.language,
      }),
    }

    return params
  }

  const populateParams = () => {
    if (type === FilterTypes.Movie) {
      dispatch(
        discover({
          ...populateCommonParams(),
          ...(isEmpty(value.adult) && { include_adult: value.adult }),
        })
      )
    } else {
      dispatch(
        discoverTv({
          ...populateCommonParams(),
        })
      )
    }
  }

  const reset = () => {
    dispatch(resetPage())
    dispatch(resetList())
  }
  useEffect(() => {
    dispatch(getOptions())

    return () => {
      reset()
    }
  }, [])

  // call reset 2 times on mount

  useEffect(() => {
    if (!firstRender) {
      reset()
    }

    populateParams()
  }, [value])

  return { loadMore, onChange }
}
