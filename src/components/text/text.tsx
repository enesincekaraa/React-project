import React, { ReactElement } from 'react'
import { StyledText } from 'components/text/style'

export type TextProps = {
  text: string | undefined
  bold?: boolean
  size?: 'small' | 'medium' | 'large' | 'xl'
} & React.HTMLAttributes<HTMLParagraphElement>

export const Text = ({
  text,
  size = 'medium',
  bold = false,
  ...props
}: TextProps): ReactElement => {
  return (
    <StyledText size={size} bold={bold} {...props}>
      {text}
    </StyledText>
  )
}
