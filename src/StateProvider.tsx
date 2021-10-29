import React, { createContext, useContext, useState } from "react"
import { GlobalStateType, StateProviderProps } from "./types/StateProvider"

export const GlobalState = createContext<Partial<GlobalStateType>>({})

export const StateProvider = (props: StateProviderProps) => {
  const [test, setTest] = useState("one-two")

  const state = {
    test,
    setTest,
  }

  return <GlobalState.Provider value={state}>{props.children}</GlobalState.Provider>
}

const useGlobalState = () => useContext(GlobalState)

export default useGlobalState

/* usage
  1. Used directly with useGlobalState-hook >>> const { test } = useGlobalState()
  2. Used grainy >>> useContext(GlobalState)
*/
