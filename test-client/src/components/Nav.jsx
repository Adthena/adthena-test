import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h3>Adthena</h3>
    <ul className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/task-one">
        <li>Task One</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
