import React from 'react'
import { NavIconContainer, NavIconItem } from 'components/navbar/style'
type NavToggleProps = {
  expanded: boolean
  setExpanded: () => void
}

export const NavToggle = ({
  expanded,
  setExpanded,
}: NavToggleProps): React.ReactElement => {
  return (
    <NavIconContainer expanded={expanded} onClick={setExpanded}>
      <NavIconItem />
      <NavIconItem />
      <NavIconItem />
    </NavIconContainer>
  )
}
