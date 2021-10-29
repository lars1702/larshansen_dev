import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "../About"
import CV from "../CV"
import Home from "../Home"
import ScriptComponent from "../ScriptComponent"
import { StyledNav, StyledLink } from "./Navbar-styles"

type useStateType = [number, React.Dispatch<React.SetStateAction<number>>]

const NavBar = (): JSX.Element => {
  const [activePage, setActivePage]: useStateType = useState<number>(0)

  return (
    <Router>
      <StyledNav>
        <StyledLink onClick={() => setActivePage(0)} active={activePage === 0} to="/">
          LARS HANSEN
        </StyledLink>
        <StyledLink onClick={() => setActivePage(1)} active={activePage === 1} to="/about">
          ABOUT
        </StyledLink>
        <StyledLink onClick={() => setActivePage(2)} active={activePage === 2} to="/cv">
          CV
        </StyledLink>
        <StyledLink onClick={() => setActivePage(3)} active={activePage === 3} to="/scripts">
          SCRIPTS
        </StyledLink>
      </StyledNav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cv" component={CV} />
        <Route path="/scripts" component={ScriptComponent} />
      </Switch>
    </Router>
  )
}

export default NavBar
