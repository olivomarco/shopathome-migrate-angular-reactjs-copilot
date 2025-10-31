import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderBar, Nav, NotFound } from './components/core';
import { Home, Products, Discounts } from './pages';
import './styles/styles.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <HeaderBar />
        <div className="section columns">
          <div className="column is-2">
            <Nav />
          </div>
          <main className="column">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
