
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from './PixelButton';

const Navbar = () => {
  return (
    <header className="py-4 px-6 md:px-10">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-eclipsia-purple pixel-borders rounded-full flex items-center justify-center">
            <span className="font-bold text-white">E</span>
          </div>
          <h1 className="pixel-text text-lg text-white">ECLIPSIA</h1>
        </Link>
        
        <div className="flex items-center space-x-2 md:space-x-6">
          <Link to="/" className="nav-item pixel-text-alt text-white text-lg hover:text-eclipsia-purple px-2 py-1">
            Home
          </Link>
          <Link to="/games" className="nav-item pixel-text-alt text-white text-lg hover:text-eclipsia-purple px-2 py-1">
            Games
          </Link>
          <Link to="/about" className="nav-item pixel-text-alt text-white text-lg hover:text-eclipsia-purple px-2 py-1">
            About
          </Link>
          <PixelButton color="purple" size="sm">
            Contact Us
          </PixelButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
