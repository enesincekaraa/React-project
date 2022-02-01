import { Navbar } from 'components/navbar/navbar'
import { GeneralLayoutContainer } from 'components/layouts/general/style'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const GeneralLayout = ({ children }: any) => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <GeneralLayoutContainer
        extraMargin={location.pathname !== '/' ? true : false}
      >
        {children}
      </GeneralLayoutContainer>
    </>
  )
}
