import { useTypedSelector } from 'store/store'
import { shallowEqual } from 'react-redux'
import { getDiscoverSelector } from 'store/selectors/discover'

export const useDiscover = () => {
  const discover = useTypedSelector(getDiscoverSelector, shallowEqual)

  return { discover }
}
