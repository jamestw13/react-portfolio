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
  return (
    <div className="m-10">
      {selectContent(currentView.name)}
      {/* Content WHEN I load the portfolio the first time THEN the About Me title and section are selected by default WHEN
      I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio
      about them WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s
      applications with links to both the deployed applications and the corresponding GitHub repository WHEN I am
      presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a
      message WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification
      that this field is required WHEN I enter text into the email address field THEN I receive a notification if I have
      entered an invalid email address WHEN I am presented with the Resume section THEN I see a link to a downloadable
      resume and a list of the developer’s proficiencies */}
      {/* <Contact />
      <Portfolio />
      <Resume /> */}
    </div>
  );
}

export default Content;
