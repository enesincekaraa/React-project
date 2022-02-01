import styled, { css } from 'styled-components'
import { breakPoints } from 'utils'

export const GeneralLayoutContainer = styled.main<{
  extraMargin: boolean
}>`
  ${(props) =>
    props.extraMargin &&
    css`
      margin-top: 150px;
      padding: 0 100px;

      @media (max-width: ${breakPoints.md}) {
        padding: 0;
        margin-top: 75px;
        & > *:not(:first-child) {
          padding: 0 25px;
        }
      }
    `}
`
