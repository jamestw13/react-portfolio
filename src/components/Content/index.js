import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Content({currentView}) {
  function selectContent(viewname) {
    switch (viewname) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
    }
  }
  return <div className="py-5 h-100">{selectContent(currentView.name)}</div>;
}

export default Content;
