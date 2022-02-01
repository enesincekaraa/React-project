import React from 'react'
import renderer from 'react-test-renderer'
import Slider from 'components/slider/slider'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils'
import { render, fireEvent, act, screen } from '@testing-library/react'

const renderWithTheme = (comp) => {
  return <ThemeProvider theme={theme}>{comp}</ThemeProvider>
}

describe('snapshots', () => {
  test('should render correctly the slider', () => {
    const comp = renderWithTheme(
      <Slider>
        <Slider.Slide value={0}>
          <Slider.Caption>
            <Slider.Title text='title' />
            <Slider.Text text='description' />
          </Slider.Caption>

          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )
    const tree = renderer.create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('other', () => {
  test('should render slider with dots', () => {
    const comp = renderWithTheme(
      <Slider>
        <Slider.Slide value={0}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )
    const { getByTestId } = render(comp)

    expect(getByTestId('dots')).toBeInTheDocument()
  })

  test('should render slider without dots', () => {
    const comp = renderWithTheme(
      <Slider dots={false}>
        <Slider.Slide value={0}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )
    const { queryByTestId } = render(comp)

    expect(queryByTestId('dots')).not.toBeInTheDocument()
  })

  test('initial slider should be active, after click the next slider should be active ', () => {
    const comp = renderWithTheme(
      <Slider dots={true}>
        <Slider.Slide value={0}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
        <Slider.Slide value={1}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )
    render(comp)

    expect(screen.queryByTestId('dot-0')).toHaveStyle({ background: '#c51d3c' })
    expect(screen.queryByTestId('dot-1')).toHaveStyle({ background: '#646b71' })

    fireEvent.click(screen.queryByTestId('dot-1'))

    expect(screen.queryByTestId('dot-0')).toHaveStyle({ background: '#646b71' })
    expect(screen.queryByTestId('dot-1')).toHaveStyle({ background: '#c51d3c' })
  })

  test('active index should be changed after autoplaytime that passing the component as prop', async () => {
    jest.useFakeTimers()
    const comp = renderWithTheme(
      <Slider autoPlayTime={3000} dots={true}>
        <Slider.Slide value={0}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
        <Slider.Slide value={1}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )
    render(comp)
    expect(screen.queryByTestId('dot-0')).toHaveStyle({ background: '#c51d3c' })
    expect(screen.queryByTestId('dot-1')).toHaveStyle({ background: '#646b71' })

    act(() => {
      jest.runAllTimers() // trigger setTimeout
    })
    expect(screen.queryByTestId('dot-0')).toHaveStyle({ background: '#646b71' })
    expect(screen.queryByTestId('dot-1')).toHaveStyle({ background: '#c51d3c' })
  })

  test(`slide's margin values should be right`, () => {
    const comp = renderWithTheme(
      <Slider dots={true}>
        <Slider.Slide value={0}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
        <Slider.Slide value={1}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
        <Slider.Slide value={2}>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )
    const { getByTestId } = render(comp)

    expect(getByTestId('0-slide')).toHaveStyle(`margin-left:-0%`)

    fireEvent.click(screen.queryByTestId('dot-1'))

    expect(getByTestId('0-slide')).toHaveStyle(`margin-left:-100%`)

    fireEvent.click(screen.queryByTestId('dot-2'))

    expect(getByTestId('0-slide')).toHaveStyle(`margin-left:-200%`)
  })

  test('it should render the all slider components', () => {
    const comp = renderWithTheme(
      <Slider dots={true}>
        <Slider.Slide value={0}>
          <Slider.Caption>
            <Slider.Title text='title' />
            <Slider.Text text='text' />
          </Slider.Caption>
          <Slider.Image src='http://image.tmdb.org/t/p/original/iLLDiO4dbUfFEnRug8DuvFEl1NB.jpg' />
        </Slider.Slide>
      </Slider>
    )

    const { getByTestId, getByText } = render(comp)

    expect(getByText(/title/i)).toBeInTheDocument()
    expect(getByText(/text/i)).toBeInTheDocument()
    expect(getByTestId('img')).toBeInTheDocument()
    expect(getByTestId('caption')).toBeInTheDocument()
  })
})
