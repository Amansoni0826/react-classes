import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
