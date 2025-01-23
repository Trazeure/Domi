import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import FloristPortfolio from './components/FloristPortfolio'
import WorkGallery from './components/WorkGallery'

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<FloristPortfolio />} />
          <Route path="/work" element={<WorkGallery />} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App