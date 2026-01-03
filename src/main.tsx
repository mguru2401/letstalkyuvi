import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EpisodesAll from './components/EpisodesAll'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/episodes" element={<EpisodesAll />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
