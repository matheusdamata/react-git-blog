import { useCallback, useState } from 'react'

import api from './lib/axios'

export function App() {
  const fetchIssues = useCallback(async () => {
    const response = await api.getIssues()
  }, [])

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}
