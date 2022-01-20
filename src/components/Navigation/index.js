import React from 'react';

function Navigation({views, currentView, setCurrentView}) {
  return (
    <nav className="">
      <ul className="d-flex justify-content-between list-unstyled">
        {views.map(view => (
          <li className={`p-2 alert ${(currentView === view && 'alert-primary') || 'alert-secondary'}`} key={view.name}>
            <span onClick={() => setCurrentView(view)}>{view.name}</span>
          </li>
        ))}
      </ul>
      {/* and navigation with titles corresponding to different sections of the portfolio WHEN I view the navigation
      titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding
      to the current section is highlighted WHEN I click on a navigation title THEN I am presented with the
      corresponding section below the navigation without the page reloading and that title is highlighted WHEN I load
      the portfolio the first time THEN the About Me title and section are selected by default */}
      {/* and navigation with titles corresponding to different sections of the portfolio WHEN I view the navigation
      titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding
      to the current section is highlighted WHEN I click on a navigation title THEN I am presented with the
      corresponding section below the navigation without the page reloading and that title is highlighted WHEN I load
      the portfolio the first time THEN the About Me title and section are selected by default */}
    </nav>
  );
}
export default Navigation;