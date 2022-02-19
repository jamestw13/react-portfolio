import './App.css';
import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

import Contact from './components/Contact';

import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
