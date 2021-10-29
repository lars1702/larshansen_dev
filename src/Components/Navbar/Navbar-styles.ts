import styled from "styled-components/macro"
import { Link } from "react-router-dom"

export const StyledNav = styled.nav`
  background-color: ${p => p.theme.navBarBG};
  height: 75px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 40px;
  font-size: 20px;
  box-shadow: 0px -4px 9px 0px black;
`

export const StyledLink = styled(Link)<{ active: boolean }>`
  color: ${p => p.theme.navBarText};
  text-decoration-line: none;
  font-weight: ${p => (p.active ? "600" : "400")};
`
