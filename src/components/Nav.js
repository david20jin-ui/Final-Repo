import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#specials">Menu</a></li>
        <li><Link to="/book">Book</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
