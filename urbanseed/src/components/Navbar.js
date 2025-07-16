import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
            Urban<span className="text-emerald-500">Seed</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/our-idea"
            className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Our Idea
          </Link>
          <Link
            to="/projects"
            className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/calculator"
            className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Calculator
          </Link>
          <Link
            to="/contact"
            className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Contact
          </Link>
          <button
            onClick={handleGetStarted}
            className="px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Get Started
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-emerald-800 dark:text-emerald-300"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 z-20">
          <div className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/our-idea"
              className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Idea
            </Link>
            <Link
              to="/projects"
              className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/calculator"
              className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              to="/contact"
              className="font-medium text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                handleGetStarted();
                setIsMenuOpen(false);
              }}
              className="px-5 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;