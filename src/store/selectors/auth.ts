import { createSelector } from 'reselect'
import { AppState } from 'store/store'

export const getAuthSelector = (state: AppState) => state.authReducer

export const getIsAuthenticatedSelector = createSelector(
  getAuthSelector,
  (auth) => {
    return !!auth.user
  }
)
