import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import BasicLayout from './components/layouts/BasicLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <BasicLayout />

          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
