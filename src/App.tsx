// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/Header';
import Login from './pages/Login';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header></Header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
