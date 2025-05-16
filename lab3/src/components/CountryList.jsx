import React, { useContext } from 'react'
import { CountryContext } from '../context/CountryContext'
import useFetch from '../hooks/useFetch'
import CountryItem from './CountryItem'

export default function CountryList() {
  const { countries } = useContext(CountryContext)
  useFetch('https://restcountries.com/v3.1/all')

  return (
    <div className="list">
      {countries.map(c => (
        <CountryItem key={c.cca3} country={c} />
      ))}
    </div>
  )
}