import React, { ReactNode } from 'react'
import {
  StyledCard,
  StyledText,
  StyledImage,
  StyledSubText,
  StyledFooter,
} from 'components/card/style'
import { CardContext, useCardContext } from 'components/card/context'

type CardProps = {
  children: ReactNode
  small?: boolean
}
const Card = ({ children, small = false }: CardProps) => {
  return (
    <CardContext.Provider value={{ small }}>
      <StyledCard small={small}>{children}</StyledCard>
    </CardContext.Provider>
  )
}

const CardText = ({ text }: { text: string }) => {
  return <StyledText lineClamp text={text} />
}

const CardSubText = ({ text }: { text: string }) => {
  return <StyledSubText text={text} />
}

export type CardImageProps = {
  src: string
}

const CardImage = ({ src }: CardImageProps) => {
  const { small } = useCardContext()

  return <StyledImage src={src} small={small} />
}

export const CardFooter = ({ children }: any) => {
  const { small } = useCardContext()

  return <StyledFooter small={small}>{children}</StyledFooter>
}
Card.Text = CardText
Card.Image = CardImage
Card.SubText = CardSubText
Card.Footer = CardFooter

export default Card
