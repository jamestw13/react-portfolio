import React from 'react';
import Navigation from '../Navigation';

function Header({views, currentView, setCurrentView}) {
  return (
    <header className="d-flex justify-content-between align-items-center m-3 postion-absolute">
      {/* <img
        src={require('../../assets/images/TJLogo.jpg')}
        className="rounded-circle position-fixed top-0 zindex-999"
      ></img> */}
      <h1>TJ James</h1>
      <Navigation views={views} currentView={currentView} setCurrentView={setCurrentView} />
    </header>
  );
}

export default Header;
