import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<Partial<GlobalStateType>>({});

export const StateProvider = (props: StateProviderProps) => {
  const [test, setTest] = useState("tes");

  const state = {
    test,
    setTest,
  };

  return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>;
};

export default AppContext;
