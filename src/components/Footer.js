import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2025 Silicon Valley Chamber of Commerce Games Committee</p>
        <p>Turning global moments into local wins</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="/single-page" style={{ color: '#ff9500', textDecoration: 'none' }}>
            → View Single Page Version
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;