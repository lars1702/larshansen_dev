import React from "react"
import styled from "styled-components/macro"
import NavBar from "./Navbar/Navbar"
import Particles from "./Particles/Particles"
import config2 from "./Particles/config2"

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  min-height: 100vh;
`
//sdfsd
const App = (): JSX.Element => {
  return (
    <AppContainer>
      <NavBar />
      <Particles options={config2} />
    </AppContainer>
  )
}

export default App
