import React, { ReactNode } from 'react'
import { StyledTextInput, Container, InputContainer, Error } from './style'

export type InputProps = {
  touched?: boolean
  icon?: ReactNode
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, error, ...props }, ref) => {
    return (
      <Container>
        <InputContainer>
          {icon && icon}
          <StyledTextInput
            withIcon={icon ? true : false}
            {...props}
            ref={ref}
          />
        </InputContainer>
        {error && <Error size='small' text={error} />}
      </Container>
    )
  }
)
