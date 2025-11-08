import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🏆 SV Games Committee
        </Link>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/benefits" className="nav-link">Benefits</Link></li>
            <li><Link to="/events" className="nav-link">Events</Link></li>
            <li><Link to="/templates" className="nav-link">Templates</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;