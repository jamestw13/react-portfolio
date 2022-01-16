import React from 'react';

function Footer() {
  return (
    <footer>
      <h4>Links</h4>
      <ul>
        <li>
          <a href="github.com/jamestw13">
            <span>logo</span>GitHub
          </a>
        </li>
        <li>
          <a href="linkedin.com/jamestw13">
            <span>logo</span>linkedIn
          </a>
        </li>
      </ul>
      {/* WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn
      profiles, and their profile on a third platform (Stack Overflow, Twitter) */}
    </footer>
  );
}

export default Footer;
