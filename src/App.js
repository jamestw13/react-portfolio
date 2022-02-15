import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

function App() {
  const [views] = useState(['about', 'portfolio', 'contact', 'resume']);

  const [currentView, setCurrentView] = useState(views[0]);

  return (
    <div className="bg-light text-dark">
      <Router>
        <Header currentView={currentView} views={views} setCurrentView={setCurrentView} />
        <Routes>
          <Route exact path="/" element={'<home/>'} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/*" element={<NoMatch />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
