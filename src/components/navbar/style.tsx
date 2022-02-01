import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Text } from 'components'
import { breakPoints } from 'utils'

export const NavbarContainer = styled.div`
  background: transparent;
  height: 50px;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 100px;
`

export const NavLinksContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: ${breakPoints.lg}) {
    display: flex;
    flex-direction: column;
  }
`

export const NavLinksRight = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: ${breakPoints.lg}) {
    margin-left: initial;
    flex-direction: column;
  }
`
export const LeftSection = styled.div`
  flex: 1;
`

export const RigtSection = styled.div<{ expanded: boolean }>`
  flex: 2;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPoints.lg}) {
    flex-direction: column;
    position: absolute;
    background-color: #101923;
    top: 0;
    width: 100%;
    height: 25vh;
    justify-content: center;
    align-items: center;
    transition: all 1s linear;
    opacity: 0;
    display: none;
    ${(props) =>
      props.expanded &&
      css`
        display: flex;
        opacity: 1;
      `}
  }
`

export const NavItem = styled(NavLink)`
  color: #cfd3d8;

  text-decoration: none;
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: ${breakPoints.md}) {
    margin-top: 10px;
  }

  @media (max-width: ${breakPoints.xl}) {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`

export const NavText = styled(Text)`
  color: #ededef;
  letter-spacing: 5px;
`

export const NavIconContainer = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  & span:nth-child(1) {
    transform: rotate(0);
    ${(props) =>
      props.expanded &&
      css`
        transform: rotate(45deg);
      `}
  }

  & span:nth-child(2) {
    opacity: 1;
    transform: translateX(0);
    ${(props) =>
      props.expanded &&
      css`
        opacity: 0;
        transform: translateX(20px);
      `}
  }

  & span:nth-child(3) {
    transform: rotate(0);
    ${(props) =>
      props.expanded &&
      css`
        transform: rotate(-45deg);
      `}
  }
`

export const NavIconItem = styled.span`
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin-top: 5px;
  transition: all 0.4s linear;
  transform-origin: 1px;
`
