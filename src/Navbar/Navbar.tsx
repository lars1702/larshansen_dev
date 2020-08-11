import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { StyledNav, StyledLink } from "./Navbar.style"

const NavBar = (): JSX.Element => {
  return (
    <Router>
      <StyledNav>
        <StyledLink to="/">LARS HANSEN</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/cv">CV</StyledLink>
      </StyledNav>
    </Router>
  )
}

export default NavBar
