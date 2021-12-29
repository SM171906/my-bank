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
  NavItem, 
  NavBtn,
  NavBtnLinks
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
          <NavItem>
            <NavLinks to="discover">
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">
             Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">
              Sign Up
            </NavLinks>
          </NavItem>
        </Navmenu>
        <NavBtn>
          <NavBtnLinks to="/signin">
             Sign In
          </NavBtnLinks>
        </NavBtn>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
