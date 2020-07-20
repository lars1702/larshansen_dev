import React from "react"
import styled from "styled-components/macro"
import NavBar from "./Navbar/Navbar"
import Particles from "./Particles/Particles"

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  min-height: 100vh;
`

const App = (): JSX.Element => {
  return (
    <AppContainer>
      <NavBar />
      <Particles />
    </AppContainer>
  )
}

export default App
