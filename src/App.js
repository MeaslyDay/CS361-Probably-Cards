import './App.css';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import SiteDate from './components/date.js';

import Layout from './pages/layout.js';
import HomePage from './pages/home.js';
import SettingsPage from './pages/settings.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        
        </Routes>

        <footer>
            <p>
              &copy;<SiteDate /> Deo Sung
            </p>
        </footer>

      </Router>
      
    </div>
  );
}

export default App;
