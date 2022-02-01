import styled, { css } from 'styled-components'
import { breakPoints } from 'utils'
import { Text } from 'components/text'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { BsFillBookmarkDashFill } from 'react-icons/bs'

export const CardContainer = styled.div<{ $wrap: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 30px;
  @media (max-width: ${breakPoints.sm}) {
    ${(props) =>
      !props.$wrap &&
      css`
        flex-wrap: nowrap;
      `}
  }
`

export const FilmContainer = styled.div<{ $wrap: boolean }>`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: ${(props) => (props.$wrap ? 'initial' : 'auto')};
`

export const FilmTitle = styled(Text)`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
  margin-left: 125px;
`
export const AddIcon = styled(BsFillBookmarkPlusFill)`
  position: absolute;
`
export const RemoveIcon = styled(BsFillBookmarkDashFill)`
  position: absolute;
`
export const LoadingContainer = styled.div`
  position: absolute;
`
