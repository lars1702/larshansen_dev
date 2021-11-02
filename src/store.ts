import create from "zustand"

type State = {
  myStateVariable: string
  setMyStateVariable: () => void
  removeMyStateVariable: () => void
  userPaymentId: string
  setUserPaymentId: (userPaymentId: string) => void
}

const changeMyStateVariable = (state: State) => {
  const { myStateVariable } = state
  return { myStateVariable: myStateVariable === "hello world" ? "hello, world!" : "hello world" }
}

const useStore = create(set => ({
  myStateVariable: "hello world",
  setMyStateVariable: () => set(changeMyStateVariable),
  removeMyStateVariable: () => set({ myStateVariable: "" }),
  userPaymentId: "",
  setUserPaymentId: (userPaymentId: string) => set({ userPaymentId }),
}))

export default useStore
