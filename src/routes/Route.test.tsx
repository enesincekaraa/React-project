import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import React, { ReactNode } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { MainRouter, PublicRoute } from 'routes'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils'

export const renderWithRouter = (ui: ReactNode, { route = '/' } = {}): any => {
  window.history.pushState({}, 'Test page', route)
  const history = createMemoryHistory({ initialEntries: [route] })

  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Router history={history}>{ui}</Router>
      </ThemeProvider>
    ),
    history,
  }
}

test('it should render the right route', () => {
  const { history } = renderWithRouter(<MainRouter />, { route: '/films' })

  expect(history.location.pathname).toBe('/films')
})

test('it should render the 404 page', () => {
  renderWithRouter(<MainRouter />, { route: '/notexistingpath' })
  expect(screen.getByText(/404/i)).toBeInTheDocument()
})

test('it should render the component if the user is not logged in ', () => {
  const authComponent = () => <div>authComponent</div>

  const { history } = renderWithRouter(
    <PublicRoute
      restricted={false}
      loggedIn={true}
      component={authComponent}
    />,
    { route: '/publicpath' }
  )

  expect(history.location.pathname).toBe('/publicpath')
  expect(screen.getByText(/authComponent/i)).toBeInTheDocument()
})

test('it should redirect to the home if the user is logged in and the path is restricted', () => {
  const loginComponent = () => <div>login</div>
  const { history } = renderWithRouter(
    <PublicRoute
      restricted={true}
      loggedIn={true}
      component={loginComponent}
    />,
    { route: '/login' }
  )

  expect(history.location.pathname).toBe('/')
  expect(screen.queryByText(/login/i)).not.toBeInTheDocument()
})
