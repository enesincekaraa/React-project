import React, { ReactNode } from 'react'
import { ButtonContainer } from 'components/button/style'
import { LoadingState } from 'types'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'block'
  rounded?: boolean
  children: ReactNode
  loading?: LoadingState
}
export const Button = ({
  variant = 'primary',
  rounded = false,
  size = 'block',
  disabled,
  children,
  loading = LoadingState.Idle,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      disabled={disabled}
      variant={variant}
      rounded={rounded}
      size={size}
      {...props}
    >
      {loading === LoadingState.Loading ? <div>...</div> : children}
    </ButtonContainer>
  )
}
