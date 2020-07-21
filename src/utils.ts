import { useState, useCallback } from "react"

interface TableSortReturn {
  key: string
  direction: string
  set: function
}

interface TableSortProps {
  initialKey: string
  initialDirection: string
}

interface ToggleStateReturn {
  state: boolean
  toggleState: function
  setState: function
}

export function useToggleState(
  initialState = false,
  [on, off] = [true, false]
): ToggleStateReturn {
  const [state, setState] = useState(initialState)

  const toggleState = useCallback(() => {
    setState(s => (s === on ? off : on))
  }, [on, off])

  return [state, toggleState, setState]
}

export function useTableSort(
  initialKey: string,
  initialDirection: string
): TableSortReturn {
  const [sortKey, setSortKey] = useState(initialKey)
  const [
    sortDirection,
    toggleSortDirection,
    setSortDirection,
  ] = useToggleState(initialDirection, ["ASCENDING", "DESCENDING"])

  const setSort = useCallback(
    key => {
      if (key !== sortKey) {
        setSortKey(key)
        setSortDirection(initialDirection)
      } else {
        toggleSortDirection()
      }
    },
    [sortKey, setSortKey, toggleSortDirection, setSortDirection]
  )

  return { key: sortKey, direction: sortDirection, set: setSort }
}
