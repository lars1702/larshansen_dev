import React, { useContext } from "react"
import styled from "styled-components/macro"
import NavBar from "./Components/Navbar/Navbar"
import stateContext from "./StateProvider"

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  min-height: 100vh;
`

const App = (): JSX.Element => {
  const { test } = useContext(stateContext)
  console.log("DEBUG - test:", test)
  return (
    <AppContainer>
      <NavBar />
    </AppContainer>
  )
}

export default App
