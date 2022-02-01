import React, { ReactElement, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { MainRouter } from 'routes'
import { GlobalStyle, Theme } from 'utils'
import { store } from 'store'
import { auth } from 'plugins/firebase'
import { authSuccess } from 'store'
import { Loading } from 'components'

function App(): ReactElement {
  const [appLoading, setAppLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        store.dispatch(authSuccess(user))
        setAppLoading(false)
      } else {
        setAppLoading(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return appLoading ? (
    <Loading />
  ) : (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <MainRouter />
        <Toaster position='top-right' />
      </Theme>
    </Provider>
  )
}

export default App
