import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CountryProvider } from './context/CountryContext'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <App />
  </CountryProvider>
)
