import { useTypedSelector } from './../store/store'
import {
  getCrew,
  getDetailInfoSelector,
  getDetailSelector,
  getRecommended,
  getStarringCast,
  getTrailer,
} from 'store'
import { shallowEqual, useSelector } from 'react-redux'
import { useMemo } from 'react'

export const useDetail = (type: string) => {
  const generalDetail = useTypedSelector(getDetailSelector, shallowEqual)
  const info = useSelector(
    (state: any) => getDetailInfoSelector(state, type),
    shallowEqual
  )

  const detailInfo = useMemo(() => {
    return info
  }, [[type]])

  const trailer = useTypedSelector(getTrailer, shallowEqual)
  const starringCast = useTypedSelector(getStarringCast, shallowEqual)
  const crew = useTypedSelector(getCrew, shallowEqual)
  const recommended = useTypedSelector(getRecommended, shallowEqual)
  return { generalDetail, trailer, starringCast, crew, recommended, detailInfo }
}
