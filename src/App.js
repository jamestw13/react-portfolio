import './App.css';
import React, { useState } from 'react';
import { Stack, Box, ThemeProvider, CssBaseline } from '@mui/material';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

import theme from './assets/data/theme';
import Hero from './components/Hero';

function App() {
  const [views] = useState(['about', 'projects', 'contact', 'resume']);

  const [currentView, setCurrentView] = useState(views[0]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        currentView={currentView}
        views={views}
        setCurrentView={setCurrentView}
      />
      <Hero />
      <Box alignItems='center'>
        <Stack maxWidth='1500px' spacing={3} alignItems='center' margin='auto'>
          <About />
          <Projects />
          <Contact />
          <Resume />
        </Stack>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
