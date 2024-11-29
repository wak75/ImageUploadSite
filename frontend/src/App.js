import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Home from './Home';
import Logout from './Logout';
import Login from './dashboard/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;