import styled, { css } from 'styled-components'
import { Text } from 'components'
import { breakPoints } from 'utils'

const generalFlex = css`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`
export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-gap: 30px;

  @media (max-width: ${breakPoints.md}) {
    grid-template-columns: 100%;
    padding: 0;
    margin-top: 75px;
    & > *:not(:first-child) {
      padding: 0 25px;
    }
  }
`
export const ImgContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  @media (max-width: ${breakPoints.md}) {
    grid-column: 1;
    grid-row: 2;
    & img {
      display: none;
    }
  }
`
export const VideoContainer = styled.div`
  grid-column: 2/2;
  grid-row: 1/2;

  @media (max-width: ${breakPoints.md}) {
    grid-column: 1;
    grid-row: 1;
  }
`
export const LeftSide = styled.div`
  grid-row: 2/2;
  grid-column: 1/2;

  @media (max-width: ${breakPoints.md}) {
    grid-row: 3;
    grid-column: 1;
  }
`

export const RightSide = styled.div`
  grid-column: 2/2;
  grid-row: 2/2;

  @media (max-width: ${breakPoints.md}) {
    grid-row: 4;
    grid-column: 1;
  }
`

export const DetailTitle = styled(Text)`
  color: #4a5359;
  position: absolute;
  margin-top: -50px;
  @media (max-width: ${breakPoints.md}) {
    margin-top: 0;
    left: 25px;
  }
`

export const StyledDetailText = styled(Text)`
  color: #4a5359;
`

export const StyledDetailSubText = styled(StyledDetailText)`
  color: #2a3139;
`

export const InfoContainer = styled.div`
  margin-top: 50px;
`

export const InfoItemContainer = styled.div<{ extraMargin: boolean }>`
  display: flex;
  margin-top: ${(props) => (props.extraMargin ? '40px' : '10px')};
  & p:first-of-type {
    flex: 1;
  }
  & p:last-of-type {
    flex: 2;
  }
`
export const DetailPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  & > *:last-child {
    margin-top: 15px;
  }
`
export const StarringContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${breakPoints.sm}) {
    & img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @media (max-width: ${breakPoints.md}) {
    overflow-x: scroll;
    flex-wrap: nowrap;
  }
`
export const CrewContainer = styled.div`
  ${generalFlex}
  @media (max-width: ${breakPoints.sm}) {
    gap: 15px;
  }
`

export const CrewItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 5px;
  }
`
export const RecommendedContainer = styled.div`
  ${generalFlex}
`
