import { createSelector } from 'reselect'
import { AppState } from 'store/store'

export const getLoadingSelector = (state: AppState) =>
  state.userReducer.favorites.addOrRemoveloading

export const getFavoriteLoadingSelector = createSelector(
  getLoadingSelector,
  (_: any, id: any) => id,
  (state: any, id: any) => state[id]
)
