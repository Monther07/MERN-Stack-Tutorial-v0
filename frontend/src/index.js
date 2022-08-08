import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { FeelingsContextProvider } from './context/feelingContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FeelingsContextProvider>
      <App />
    </FeelingsContextProvider>
  </React.StrictMode>,
)
