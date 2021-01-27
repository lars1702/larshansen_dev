/* eslint-disable */
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

interface IProps {
  children: JSX.Element;
}

export const StateProvider = ({ children }: IProps) => {
  const [test, setTest] = useState("tes");

  const state = {
    test,
    setTest,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContext;
