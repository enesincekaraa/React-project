import { useSelector } from 'react-redux'
import { getIsAuthenticatedSelector } from 'store/selectors/auth'
import { useTypedSelector } from './../store/store'

export const useAuth = () => {
  const user = useTypedSelector((state) => state.authReducer.user)
  const loading = useTypedSelector((state) => state.authReducer.loading)
  const isAuthenticated = useSelector(getIsAuthenticatedSelector)

  return { user, loading, isAuthenticated }
}
