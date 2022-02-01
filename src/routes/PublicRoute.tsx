import { useAuth } from 'hooks'
import React, { ReactElement } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { GeneralLayout } from '../components/layouts/general'

export interface IPublicRoute extends RouteProps {
  restricted?: boolean
  component: any
  layout?: any
}

export const PublicRoute = ({
  component: Component,
  restricted = false,
  layout: Layout = GeneralLayout,
  ...rest
}: IPublicRoute): ReactElement => {
  const { isAuthenticated } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to='/' />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  )
}
