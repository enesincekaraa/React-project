import { ButtonProps } from 'components/button/button'
import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button<
  Pick<ButtonProps, 'variant' | 'rounded' | 'size' | 'disabled'>
>`
  width: 250px;
  background-color: blue;
  padding: 12px;
  color: #f6f9fc;
  border: none;
  cursor: pointer;

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 8px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: default;
    `}

    ${({ size }) => {
    switch (size) {
      case 'block':
        return 'width:100%;'
      default:
        break
    }
  }}

    ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return 'background-color:#5168F4;'
      default:
        break
    }
  }}
`
