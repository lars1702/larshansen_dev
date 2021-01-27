import styled from "styled-components/macro"
import { Link } from "react-router-dom"

export const StyledNav = styled.nav`
  background-color: #1a535c;
  height: 75px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 40px;
  font-size: 20px;
`

export const StyledLink = styled(Link)`
  color: #ff6b6b;
  text-decoration-line: none;
  :first-child {
    font-weight: 500;
  }
`
