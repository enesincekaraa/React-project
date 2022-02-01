import { useMemo } from 'react'
import { getFavoriteLoadingSelector } from 'store/selectors/user'
import { useTypedSelector } from '../store/store'

export const useUser = (id?: number) => {
  const selectLoading = useMemo(() => getFavoriteLoadingSelector, [])
  const loading = useTypedSelector((state) => selectLoading(state, id))

  const favorites = useTypedSelector(
    (state) => state.userReducer.favorites.data
  )
  const favoritesLoading = useTypedSelector(
    (state) => state.userReducer.favorites.loading
  )

  // const selectLoading = useTypedSelector(state => getFavoriteLoadingSelector(state, id))
  // const loading = useMemo(() => {return selectLoading},[[id]])

  return { loading, favorites, favoritesLoading }
}
