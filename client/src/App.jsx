import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div style={{
      background: dark ? '#0a0a0a' : '#f8f7ff',
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      <BrowserRouter>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<HomePage dark={dark} />} />
          <Route path="/upload" element={<UploadPage dark={dark} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App