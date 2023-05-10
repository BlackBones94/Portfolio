import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/MainPage';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
