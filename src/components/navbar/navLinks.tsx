import React, { ReactElement } from 'react'
import {
  NavItem,
  NavLinksContainer,
  NavLinksRight,
} from 'components/navbar/style'
import { useAuth } from 'hooks'
import { BsFillBookmarkFill } from 'react-icons/bs'

type NavLinksProps = {
  onClose: () => void
}
export const NavLinks = ({ onClose }: NavLinksProps): ReactElement => {
  const { user } = useAuth()
  return (
    <NavLinksContainer>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/'
        onClick={onClose}
        exact
      >
        PREMIER
      </NavItem>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/films'
        onClick={onClose}
        isActive={(match, location) => {
          if (!match && location.pathname.includes('/movie')) {
            return true
          }

          if (!match) {
            return false
          }

          return true
        }}
      >
        FILMS
      </NavItem>
      <NavItem
        activeStyle={{ color: '#CE1E37' }}
        to='/tv'
        onClick={onClose}
        isActive={(match, location) => {
          if (!match && location.pathname.includes('/tv')) {
            return true
          }
          if (!match) {
            return false
          }

          return true
        }}
      >
        TV SERIES
      </NavItem>
      <NavLinksRight>
        <NavItem to='/favorites'>
          <BsFillBookmarkFill color='#CE1E37' />
        </NavItem>
        <NavItem
          activeStyle={{ color: '#CE1E37' }}
          to='/login'
          onClick={onClose}
        >
          {user ? user.displayName : 'LOGIN'}
        </NavItem>
      </NavLinksRight>
    </NavLinksContainer>
  )
}
