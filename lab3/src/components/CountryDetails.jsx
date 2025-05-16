import React, { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'

export default function CountryDetails() {
  const { selected, setSelected } = useContext(CountryContext)
  const { name, capital, region, population, flags, languages } = selected
  const langs = Object.values(languages || {}).join(', ')
  return (
    <div className="details">
      <button onClick={() => setSelected(null)}>← Back</button>
      <h2>{name.common}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {langs}</p>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
    </div>
  )
}