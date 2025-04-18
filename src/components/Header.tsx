import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src="/BioScope.png" alt="Bioscope" className="h-20" />
          <span className="text-xl font-bold font-poppins">
            <span className={isScrolled ? 'text-secondary' : 'text-primary'}>BioScope</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Product', path: '/product' },
            { name: 'Technology', path: '/technology' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? isActive
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                    : isActive
                    ? 'text-primary'
                    : 'text-white hover:text-primary-light'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <HashLink smooth to="/#waitlist" className="hidden md:flex">
          <button className="hidden md:flex btn btn-primary">Join Waitlist</button>
        </HashLink>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-navy bg-opacity-95 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Product', path: '/product' },
            { name: 'Technology', path: '/technology' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-xl font-medium py-3 transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-white hover:text-primary-light'
                }`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          <button className="btn btn-primary mt-8">Join Waitlist</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;