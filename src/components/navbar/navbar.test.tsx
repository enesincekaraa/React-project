/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import { Navbar } from 'components/navbar/navbar'
import { MemoryRouter } from 'react-router-dom'
import { Context as ResponsiveContext } from 'react-responsive'

const routerWrapper = (comp: any) => {
  return <MemoryRouter>{comp}</MemoryRouter>
}

describe('snapshots', () => {
  test('should render correctly the navbar', () => {
    const tree = renderer.create(routerWrapper(<Navbar />)).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('component test', () => {
  test('should render the right items on larger than medium breakpoint device', () => {
    //not working as expected
    const { getByText, queryByTestId } = render(
      routerWrapper(
        <ResponsiveContext.Provider value={{ width: 768 }}>
          <Navbar />
        </ResponsiveContext.Provider>
      )
    )

    expect(getByText(/MOVIES/i)).toBeInTheDocument()

    expect(queryByTestId('toggle')).toBeNull()
  })

  test('it should render all nav items correctly', () => {
    const { getByText } = render(routerWrapper(<Navbar />))

    expect(getByText(/PREMIER/)).toBeInTheDocument()
    expect(getByText(/FILMS/)).toBeInTheDocument()
    expect(getByText(/TV SERIES/)).toBeInTheDocument()
    expect(getByText(/PREMIER/)).toBeInTheDocument()
    expect(getByText(/SHOW/)).toBeInTheDocument()
    expect(getByText(/LOGIN/)).toBeInTheDocument()
  })

  test('it should change the  active item when on click ', () => {
    const { getByText } = render(routerWrapper(<Navbar />))

    expect(getByText(/PREMIER/i)).toHaveStyle({ color: '#CE1E37' })

    fireEvent.click(getByText(/FILMS/i))

    expect(getByText(/PREMIER/i)).toHaveStyle({ color: '#cfd3d8' })
    expect(getByText(/FILMS/i)).toHaveStyle({ color: '#CE1E37' })
  })
})
