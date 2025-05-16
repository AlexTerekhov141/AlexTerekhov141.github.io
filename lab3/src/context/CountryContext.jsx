import React, { createContext, useState } from 'react'
export const CountryContext = createContext()

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(null)
  return (
    <CountryContext.Provider value={{ countries, setCountries, selected, setSelected }}>
      {children}
    </CountryContext.Provider>
  )
}