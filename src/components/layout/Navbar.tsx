import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../data/mockData';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 md:gap-6">
          <Link to="/" className="hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-primary font-headline uppercase whitespace-nowrap">mana coffee</span>
          </Link>
          <div className="hidden sm:flex bg-primary-fixed px-3 md:px-4 py-1 rounded-full flat-shadow-primary border-2 border-primary">
            <span className="text-on-primary-fixed font-bold text-[10px] md:text-sm tracking-widest leading-none">마나</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-headline uppercase tracking-tighter text-sm transition-all ${
                location.pathname === link.path 
                ? 'text-primary border-b-4 border-primary pb-1' 
                : 'text-primary-container font-medium hover:opacity-80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/location"
            className="hidden sm:inline-block bg-primary text-on-primary px-6 md:px-8 py-2 md:py-3 rounded-md font-bold flat-shadow-primary active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase tracking-tight text-xs md:text-sm text-center"
          >
            Venha nos Conhecer
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2 flex items-center justify-center rounded-md hover:bg-primary-fixed/20 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl font-bold">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[65px] h-[calc(100vh-65px)] md:hidden bg-background z-40 transition-all duration-300 ease-in-out transform flex flex-col ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex-grow flex flex-col items-center justify-center p-8 gap-10">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`font-headline uppercase tracking-tight text-4xl font-black transition-all ${
                location.pathname === link.path 
                ? 'text-primary border-b-8 border-primary' 
                : 'text-primary/40 hover:text-primary transition-colors'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/location"
            onClick={closeMenu}
            className="mt-4 bg-primary text-on-primary px-10 py-5 rounded-md font-black text-xl flat-shadow-primary uppercase tracking-tight w-full text-center sm:hidden"
          >
            Venha nos Conhecer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
