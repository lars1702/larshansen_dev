import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "../About"
import CV from "../CV"
import Home from "../Home"
import { StyledNav, StyledLink } from "./Navbar-styles"

type useStateType = [number, React.Dispatch<React.SetStateAction<number>>]

const pages = [
  { url: "/", text: "LARS HANSEN" },
  { url: "/about", text: "ABOUT" },
  { url: "/cv", text: "CV" },
]

const NavBar = (): JSX.Element => {
  const [activePage, setActivePage]: useStateType = useState<number>(0)

  return (
    <Router>
      <StyledNav>
        {pages.map(({ url, text }, i) => (
          <StyledLink key={i} onClick={() => setActivePage(i)} active={activePage === i} to={url}>
            {text}
          </StyledLink>
        ))}
      </StyledNav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cv" component={CV} />
      </Switch>
    </Router>
  )
}

export default NavBar
