import React from 'react'
import ReactDOM from 'react-dom/client'
import { initPostHog } from './lib/posthog'
import App from './App.jsx'
import './index.css'

initPostHog()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
