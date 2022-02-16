import './App.css';
import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [views] = useState(['about', 'projects', 'contact', 'resume']);

  const [currentView, setCurrentView] = useState(views[0]);

  return (
    <>
      <Header
        currentView={currentView}
        views={views}
        setCurrentView={setCurrentView}
      />
      <Box alignItems='center' backgroundColor='#0000FF'>
        <Stack
          maxWidth='1500px'
          spacing={3}
          alignItems='center'
          backgroundColor='#000000'
          color='#FFFFFF'
          margin='auto'
        >
          <About />
          <Projects />
          <Contact />
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default App;
