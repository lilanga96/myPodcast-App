// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        {/* Your other navigation links */}
        <li>
          <Link to="/login">Login</Link> {/* Link to the login page */}
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
