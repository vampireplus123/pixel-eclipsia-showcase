
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-eclipsia-deep-blue border-t-2 border-eclipsia-purple/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-eclipsia-purple pixel-borders rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-xs">E</span>
              </div>
              <h2 className="pixel-text text-base text-white">ECLIPSIA</h2>
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              Crafting immersive gaming experiences that transport players to worlds of wonder and adventure.
            </p>
            <div className="flex space-x-3">
              {['Twitter', 'Discord', 'Steam', 'Itch.io'].map((platform) => (
                <a key={platform} href="#" className="text-gray-400 hover:text-eclipsia-cyan transition-colors pixel-text-alt">
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="pixel-text text-white text-sm mb-4">Games</h3>
            <ul className="space-y-2">
              {['Stellar Quest', 'Neon Drift', 'Pixel Warriors', 'Eclipsia Worlds'].map((game) => (
                <li key={game}>
                  <a href="#" className="text-gray-400 hover:text-eclipsia-yellow text-sm transition-colors">
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="pixel-text text-white text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Press Kit', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-eclipsia-pink text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-eclipsia-purple/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {currentYear} Eclipsia Game Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-xs">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
