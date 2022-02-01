import { StyledText } from 'components/slider/style'
import styled from 'styled-components'
import { breakPoints } from 'utils'
import { FilmContainer } from 'components/movies/style'
export const SliderBottomContainer = styled.div`
  display: flex;

  align-items: center;

  & p:nth-child(2) {
    margin-left: 2rem;
  }
`

export const SliderBottomTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (min-width: ${breakPoints.sm}) {
    display: none;
  }
  ${StyledText} {
    color: #596068;
  }
`

export const Image = styled.img``

export const FilmsContainer = styled.div`
  padding-left: 100px;
  @media (max-width: ${breakPoints.md}) {
    padding-left: 0;
  }
  & ${FilmContainer}:first-of-type {
    margin-top: 80px;
  }

  & ${FilmContainer}:not(:first-of-type) {
    margin-top: 40px;
  }
`
