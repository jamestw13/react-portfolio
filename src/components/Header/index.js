import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className="d-flex align-items-center m-3">
      <h1>TJ James</h1>
      {/* I am presented with the developer's name  */}
      <Navigation />
    </header>
  );
}

export default Header;
