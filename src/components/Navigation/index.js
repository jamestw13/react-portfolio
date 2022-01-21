import React from 'react';

function Navigation({views, currentView, setCurrentView}) {
  return (
    <div className="ml-auto">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {views.map(view => (
            <div className={`nav-link p-2 m-2 ${currentView === view && 'active'}`} key={view.name}>
              <span onClick={() => setCurrentView(view)}>{view.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Navigation;
