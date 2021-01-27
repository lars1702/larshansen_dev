import React, { useContext } from "react";
import styled from "styled-components/macro";
import NavBar from "./Navbar/Navbar";
import stateContext from "./StateProvider";

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  min-height: 100vh;
`;

interface Istate {
  test: string;
  setTest: Function;
}

const App = (): JSX.Element => {
  const { test, setTest }: any = useContext(stateContext);

  return (
    <AppContainer>
      <NavBar />
      <div onClick={() => setTest(test === "tes" ? "test" : "tes")}>{test}</div>
    </AppContainer>
  );
};

export default App;
