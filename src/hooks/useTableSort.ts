import { useState } from "react"
import useToggleState from "../hooks/useToggleState"
import { useAutoCallback } from "hooks.macro"

interface TableSortReturn {
  sortKey: string
  sortDirection: boolean
  setSort: (sortKey: string) => void
}

export function useTableSort(initialKey: string, initialDirection: boolean): TableSortReturn {
  const [sortKey, setSortKey] = useState(initialKey)
  const [sortDirection, toggleSortDirection, setSortDirection] = useToggleState(initialDirection)

  const setSort = useAutoCallback(key => {
    if (key !== sortKey) {
      setSortKey(key)
      setSortDirection(initialDirection)
    } else {
      toggleSortDirection()
    }
  })

  return { sortKey, sortDirection, setSort }
}

export default useTableSort
