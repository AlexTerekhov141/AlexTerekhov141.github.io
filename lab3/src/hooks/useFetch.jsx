import { useEffect, useContext } from 'react'
import { CountryContext } from '../context/CountryContext'

export default function useFetch(url) {
  const { setCountries } = useContext(CountryContext)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [url, setCountries])
}
