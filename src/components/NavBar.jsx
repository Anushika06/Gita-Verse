import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-500 font-bold'
      : 'text-white font-bold';

  return (
    <nav className="w-full bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <NavLink to="/">
          <img className="w-12 h-12 rounded-full" src={Logo} alt="Logo" />
        </NavLink>

        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>
            <span className="text-xl">Chapters</span>
          </NavLink>
          <NavLink to="/quotes" className={linkClass}>
            <span className="text-xl">Quotes</span>
          </NavLink>
          <NavLink to="/aboutgita" className={linkClass}>
            <span className="text-xl">About Gita</span>
          </NavLink>
          <NavLink to="/wishlist" className={linkClass}>
            <span className="text-xl">Favourites</span>
          </NavLink>
          <NavLink to="/form" className={linkClass}>
            <span className="text-xl">Feedback</span>
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          <NavLink to="/" className={linkClass} onClick={toggleMenu}>
            Chapters
          </NavLink>
          <NavLink to="/quotes" className={linkClass} onClick={toggleMenu}>
            Quotes
          </NavLink>
          <NavLink to="/aboutgita" className={linkClass} onClick={toggleMenu}>
            About Gita
          </NavLink>
          <NavLink to="/wishlist" className={linkClass} onClick={toggleMenu}>
            Favourites
          </NavLink>
          <NavLink to="/form" className={linkClass} onClick={toggleMenu}>
            Feedback
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
