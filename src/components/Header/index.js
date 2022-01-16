import React from 'react';

function Header() {
  return (
    <header>
      <h1>TJ James</h1>
      {/* I am presented with the developer's name  */}
      <nav>
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
      {/* and navigation with titles corresponding to different sections of the portfolio  */}
      {/* WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, */}
      {/* and the title corresponding to the current section is highlighted WHEN I click on a navigation title THEN I am
      presented with the corresponding section below the navigation without the page reloading and that title is
      highlighted WHEN I load the portfolio the first time THEN the About Me title and section are selected by default */}
    </header>
  );
}

export default Header;
