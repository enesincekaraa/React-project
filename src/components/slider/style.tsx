import styled, { css } from 'styled-components'
import { Text } from 'components/text'
import { breakPoints } from 'utils'

export const StyledSlideContainer = styled.div`
  max-height: 100vh;
  width: 100%;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.primary};
  transition: 750ms all ease-in-out;

  @media (max-width: ${breakPoints.sm}) {
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const StyledCaption = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 75px;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 50%;
  z-index: 2;
  padding-left: 200px;
`

export const StyledImage = styled.img<{ src: string }>`
  height: 86vh;
  width: 100%;
  background-position: center center;
  object-fit: cover;
  background-size: cover;

  /* animation: animateImage 1s; */
  @keyframes animateImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:after {
  }
  @media only screen and (max-width: 728px) {
    height: auto;
  }
`
export const Hey = styled.div`
  position: relative;
  &::before {
    height: 100%;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
`
export const StyledDotsContainer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 10px;
  justify-content: center;

  @media (max-width: ${breakPoints.sm}) {
    bottom: 0;
  }
`
export const StyledDotContainer = styled.div<{ isActive: boolean }>`
  border-radius: 50%;
  width: 11px;
  height: 11px;
  margin-left: 25px;
  background: #646b71;
  opacity: 1;
  cursor: pointer;
  transition: 750ms all ease-in-out;
  z-index: 3;

  ${(props) =>
    props.isActive &&
    css`
      background: #c51d3c;
      opacity: 1;
    `}

  @media (max-width: ${breakPoints.sm}) {
    width: 8px;
    height: 8px;
  }
`

export const StyledContent = styled.div``

const lineClamp = css`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const StyledTitle = styled(Text)`
  color: white;
  text-shadow: white 0px 0px 3px;

  ${lineClamp};
`

export const StyledText = styled(Text)<{ showOnMobile: boolean }>`
  color: #b8b8ba;

  ${(props) =>
    props.showOnMobile === false &&
    css`
      @media (max-width: ${breakPoints.sm}) {
        display: none;
      }
    `}
  ${lineClamp};
`

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${breakPoints.md}) {
    top: 70px;

    ${StyledTitle} {
      font-size: 1.8rem;
      text-align: center;
    }
    ${StyledCaption} {
      padding-left: 0;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }
`
