import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FloristPortfolio from './components/FloristPortfolio'
import WorkGallery from './components/WorkGallery'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<FloristPortfolio />} />
        <Route path="/work" element={<WorkGallery />} />
      </Routes>
    </main>
  )
}

export default App