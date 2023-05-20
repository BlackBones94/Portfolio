import React from 'react';
import ReactDOM from 'react-dom/client';

// import Header from './componants/Header';
import Main from './pages/MainPage';

import './scss/index.css';
import './scss/expertise.css';
import './scss/title.css';
import './scss/nav.css';
import './scss/btn.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
