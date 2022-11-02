import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './page/Page1'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>App</div>} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router>
  )
}

export default App
