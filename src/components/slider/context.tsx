import React from 'react'

interface ISliderContext {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export const SliderContext = React.createContext<null | ISliderContext>(null)

export const useSliderContext = (): any => {
  const context = React.useContext(SliderContext)

  if (!context) {
    throw new Error(
      `Slide compound components cannot be rendered outside the Slider component`
    )
  }
  return context
}
