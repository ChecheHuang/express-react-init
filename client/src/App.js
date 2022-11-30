import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './page/Page1'
import Context from './page/Context'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>App</div>} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </Router>
  )
}

export default App
