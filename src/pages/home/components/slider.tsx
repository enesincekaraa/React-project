import { Slider } from 'components'
import { useMovie } from 'hooks'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularMovies } from 'store'
import {
  SliderBottomContainer,
  SliderBottomTextContainer,
} from 'pages/home/style'
import { getYear, IMAGE_BASE_URL } from 'utils'
import { Link } from 'react-router-dom'

export const HomeSlider = () => {
  const dispatch = useDispatch()
  const { sliderMovies } = useMovie()

  useEffect(() => {
    if (sliderMovies.length === 0) {
      dispatch(getPopularMovies())
    }
  }, [])

  return (
    <Slider>
      {sliderMovies?.map((item: any, index: any) => (
        <Slider.Slide key={`${item.id}-${index}`} value={index}>
          <Slider.Caption>
            <Slider.Title text={item.original_title} />
            <Slider.Text text={item.overview} />
            <SliderBottomContainer>
              <Slider.Text text='IMDB' />
              <Slider.Text
                size='large'
                bold
                text={item.vote_average.toString()}
              />
            </SliderBottomContainer>
          </Slider.Caption>
          <Link to={`/detail/movie/${item.id}`}>
            <Slider.Image
              src={`${IMAGE_BASE_URL}/original/${item.backdrop_path}`}
            />
          </Link>

          <SliderBottomTextContainer>
            <Slider.Text
              size='small'
              text={getYear(item.release_date.toString())}
            />
          </SliderBottomTextContainer>
        </Slider.Slide>
      ))}
    </Slider>
  )
}
