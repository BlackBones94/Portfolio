import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
// import Header from './componants/Header';
import Main from './pages/MainPage';
import Box from './componants/Scene';

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
      
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>

      <Canvas>
        <ambientLight intensity={0.1}/>
        <pointLight intensity={1.5} position={[15, 10, 10]} />
        <Box position={[0, 0, 0]} />
        {/* <Box position={[1.2, 0, 0]} /> */}
       </Canvas>

    </Router>
  </React.StrictMode>
);
