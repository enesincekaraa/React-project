import React from 'react'
import { StyledSelect, StyledOption } from 'components/select/style'
import { LoadingState } from 'types'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
  loading?: LoadingState
}

const Select = ({
  children,
  loading = LoadingState.Idle,
  ...props
}: SelectProps) => {
  return (
    <StyledSelect {...props}>
      {loading !== LoadingState.Loading ? children : <option>...</option>}
    </StyledSelect>
  )
}

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode
}
const Option = ({ children, ...props }: OptionProps) => {
  return <StyledOption {...props}>{children}</StyledOption>
}

Select.Option = Option

export default Select
