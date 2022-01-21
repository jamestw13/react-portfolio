import React from 'react';
import Navigation from '../Navigation';

function Header({views, currentView, setCurrentView}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark flex-grow-1">
        <div className="container-fluid">
          <h1 className="nav-brand text-light">TJ James</h1>
          <Navigation views={views} currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
