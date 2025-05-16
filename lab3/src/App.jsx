import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'
import { CountryContext } from './context/CountryContext'

export default function App() {
  const { selected } = useContext(CountryContext)
  return (
    <div className="app">
      <Header />
      {selected ? <CountryDetails /> : <CountryList />}
      <Footer />
    </div>
  )
}