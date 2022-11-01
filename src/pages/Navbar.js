import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { id: 1, path: '/', text: 'Home' },
  { id: 2, path: '/calculator', text: 'Calculator' },
  { id: 3, path: '/quote', text: 'Quote' },
];

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} end>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
