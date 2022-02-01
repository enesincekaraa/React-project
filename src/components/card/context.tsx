import React from 'react'

interface ICardContext {
  small: boolean
}

export const CardContext = React.createContext<null | ICardContext>(null)

export const useCardContext = (): any => {
  const context = React.useContext(CardContext)

  if (!context) {
    throw new Error(
      `Card compound components cannot be rendered outside the card component`
    )
  }
  return context
}
