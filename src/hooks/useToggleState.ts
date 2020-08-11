import { useState, Dispatch } from "react"
import { useAutoCallback } from "hooks.macro"

const useToggleState = (initialState: boolean): [boolean, () => void, Dispatch<boolean>] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggleState = useAutoCallback(() => setState(state => (state === true ? false : true)))

  return [state, toggleState, setState]
}

export default useToggleState
