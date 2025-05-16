import React, { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'

export default function CountryItem({ country }) {
  const { setSelected } = useContext(CountryContext)
  const handleClick = () => setSelected(country)
  return (
    <div className="item" onClick={handleClick}>
      <span>{country.flag}</span> {country.name.common}
    </div>
  )
}