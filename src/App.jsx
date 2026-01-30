import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Community from './pages/Community';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans text-gray-900 dark:text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
