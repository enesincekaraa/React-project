import { useAuth } from 'hooks'
import React, { ReactElement } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { GeneralLayout } from '../components/layouts/general'

export interface IPrivateRoute extends RouteProps {
  component: any
  layout?: any
}

export const PrivateRoute = ({
  component: Component,
  layout: Layout = GeneralLayout,
  ...rest
}: IPrivateRoute): ReactElement => {
  const { isAuthenticated } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}
