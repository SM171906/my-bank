import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  Navmenu, 
  NavLinks, 
  NavItem 
} from './navbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
        dollar
        </NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <Navmenu>
          <NavItem>
            <NavLinks to="about">
              About
            </NavLinks>
          </NavItem>

        </Navmenu>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
