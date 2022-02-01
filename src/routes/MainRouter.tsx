import React, { Suspense } from 'react'
import lazy from 'routes/lazy'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from 'utils'
import { PublicRoute } from 'routes'
import { Loading } from 'components'
import { AuthLayout } from 'components/layouts/auth'
import { PrivateRoute } from './PrivateRoute'

const Detail = lazy(() => import('pages'), 'Detail')
const Home = lazy(() => import('pages'), 'Home')
const Films = lazy(() => import('pages'), 'Films')
const Tv = lazy(() => import('pages'), 'Tv')
const Login = lazy(() => import('pages'), 'Login')
const Favorites = lazy(() => import('pages'), 'Favorites')

export const MainRouter = (): React.ReactElement => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PublicRoute exact path='/' component={Home} />
          <PublicRoute path='/films' component={Films} />
          <PublicRoute path='/tv' component={Tv} />
          <Route
            path='/detail'
            render={({ match: { url } }) => (
              <>
                <PublicRoute path={`${url}/tv/:id`} component={Detail} />
                <PublicRoute path={`${url}/movie/:id`} component={Detail} />
              </>
            )}
          />

          <PublicRoute
            path='/login'
            component={Login}
            layout={AuthLayout}
            restricted
          />
          <PrivateRoute path='/favorites' component={Favorites} />
          <PublicRoute component={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </Router>
  )
}
