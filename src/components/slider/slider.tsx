import React, { useEffect, useMemo, useState } from 'react'
import {
  StyledContainer,
  StyledDotsContainer,
  StyledDotContainer,
  StyledSlideContainer,
  StyledContent,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledCaption,
  Hey,
} from 'components/slider/style'
import { useSliderContext, SliderContext } from 'components/slider/context'
import { TextProps } from 'components'

type ChildrenProps = {
  children: React.ReactNode
}
type SliderProps = {
  autoPlayTime?: number
  dots?: boolean
  initialIndex?: number
} & ChildrenProps

const Slider = ({
  children,
  autoPlayTime = 5000,
  dots = true,
  initialIndex = 0,
}: SliderProps): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((index) => (index >= length - 1 ? 0 : index + 1))
    }, autoPlayTime)
    return () => clearTimeout(timer)
  }, [activeIndex, autoPlayTime])

  const length = React.Children.count(children)

  const value = useMemo(() => ({ activeIndex, setActiveIndex }), [activeIndex])

  return (
    <SliderContext.Provider value={value}>
      <StyledContainer>
        {children}
        {dots && (
          <StyledDotsContainer data-testid='dots'>
            {[...Array(length)].map((_, index) => {
              return (
                <StyledDotContainer
                  data-testid={`dot-${index}`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  isActive={index === activeIndex}
                />
              )
            })}
          </StyledDotsContainer>
        )}
      </StyledContainer>
    </SliderContext.Provider>
  )
}

type SlideProps = {
  value: number
} & ChildrenProps

const Slide = ({ children, value }: SlideProps) => {
  const { activeIndex } = useSliderContext()

  return (
    <StyledSlideContainer
      data-testid={`${value}-slide`}
      style={{ marginLeft: value === 0 ? `-${activeIndex * 100}%` : 0 }}
    >
      {children}
    </StyledSlideContainer>
  )
}

type SliderImageProps = {
  src: string
}
const SliderImage = ({ src }: SliderImageProps) => {
  return (
    <Hey>
      <StyledImage data-testid='img' src={src} />
    </Hey>
  )
}

const SliderContent = ({ children }: ChildrenProps) => {
  return <StyledContent>{children}</StyledContent>
}

const SliderTitle = ({ text, ...props }: TextProps) => {
  return <StyledTitle size='xl' text={text} {...props} />
}

const SliderText = ({
  text,
  showOnMobile = false,
  ...props
}: TextProps & { showOnMobile?: boolean }) => {
  return <StyledText text={text} showOnMobile={showOnMobile} {...props} />
}

const SliderCaption = ({ children }: any) => {
  return <StyledCaption data-testid='caption'>{children}</StyledCaption>
}

Slider.Slide = Slide
Slider.Image = SliderImage
Slider.Content = SliderContent
Slider.Title = SliderTitle
Slider.Text = SliderText
Slider.Caption = SliderCaption

export default Slider
