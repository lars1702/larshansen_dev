import create from "zustand"

type State = {
  myStateVariable: string
  setMyStateVariable: () => void
  removeMyStateVariable: () => void
  userPaymentId: string
  setUserPaymentId: (userPaymentId: string) => void
}

const changeMyStateVariable = (state: State) => {
  let { myStateVariable } = state
  if (myStateVariable === "hello world") myStateVariable = "hello, world!"
  else if (myStateVariable === "hello, world!") myStateVariable = "hello world"
  return { myStateVariable }
}

const useStore = create(set => ({
  myStateVariable: "hello world",
  setMyStateVariable: () => set(changeMyStateVariable),
  removeMyStateVariable: () => set({ myStateVariable: "" }),
  userPaymentId: "",
  setUserPaymentId: (userPaymentId: string) => set({ userPaymentId }),
}))

export default useStore
