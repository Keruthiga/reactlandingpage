import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <p>&copy; {new Date().getFullYear()} Car Showroom</p>
    </footer>
  );
};

export default Footer;
