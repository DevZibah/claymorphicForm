import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthenticationContextProvider from './context/AuthenticationContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthenticationContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthenticationContextProvider>
)
