import React, { ReactElement, useState } from 'react'
import {
  LeftSection,
  NavbarContainer,
  NavText,
  RigtSection,
} from 'components/navbar/style'
import { NavLinks } from 'components/navbar/navLinks'
import { NavToggle } from 'components/navbar/navToggle'
import { useMediaQuery } from 'react-responsive'

export const Navbar = (): ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 992 })

  return (
    <NavbarContainer>
      <LeftSection>
        <NavText bold text='MOVIES' />
      </LeftSection>

      <RigtSection expanded={expanded}>
        <NavLinks data-testid='nav-links' onClose={() => setExpanded(false)} />
      </RigtSection>
      {isMobile && (
        <NavToggle
          data-testid='toggle'
          expanded={expanded}
          setExpanded={() => setExpanded(!expanded)}
        />
      )}
    </NavbarContainer>
  )
}
