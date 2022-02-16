import './App.css';
import React, { useState } from 'react';
import {Stack} from '@mui/material'

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import Contact from './pages/Contact'

function App() {
  const [views] = useState(['about', 'projects', 'contact', 'resume']);

  const [currentView, setCurrentView] = useState(views[0]);

  return (
    <Stack spacing={3} alignItems='center' backgroundColor='#000000' color="#FFFFFF">
      
        <Header currentView={currentView} views={views} setCurrentView={setCurrentView} />
      
          
          <About />
          <Projects />
          <Contact />
      
      

        <Footer />
      
    </Stack>
  );
}

export default App;
