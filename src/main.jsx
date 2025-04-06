import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FeederApp } from './components/FeederApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeederApp />
  </StrictMode>,
)
