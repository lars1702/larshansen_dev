import React from "react"
import styled from "styled-components/macro"
import shallow from "zustand/shallow"
import useStore from "../store"

const HomeContainer = styled.div``

const Home = (): JSX.Element => {
  const { myStateVariable, setMyStateVariable } = useStore(
    state => ({
      myStateVariable: state.myStateVariable,
      setMyStateVariable: state.setMyStateVariable,
    }),
    shallow,
  )

  return (
    <HomeContainer>
      <h1>This is the Home page.</h1>
      <button onClick={setMyStateVariable}>{myStateVariable}</button>
    </HomeContainer>
  )
}

export default Home
