import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Createpost from './pages/Createpost'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import UserPost from './pages/UserPost'

const App = () => {
  return (
    <Router>

      {/* ✅ MUST BE HERE */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<Createpost />} />
        <Route path="/userpost" element={<UserPost />} />
      </Routes>

    </Router>
  )
}

export default App