export type GlobalStateType = {
  test: string
  setTest: React.Dispatch<React.SetStateAction<string>>
}

interface StateProviderProps {
  children: JSX.Element
}
