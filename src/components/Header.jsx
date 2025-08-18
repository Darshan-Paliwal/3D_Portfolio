import { motion } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth <= 768) setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <motion.nav
      initial={{ y: -100 }} // Slide in from top
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full glass z-50 p-4 flex justify-between items-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onClick={() => scrollToSection('hero')}
        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer"
      >
        My Portfolio
      </motion.h1>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none hover:text-primary transition-colors"
        >
          ☰
        </button>
      </div>
      <motion.ul
        className="hidden md:flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {['hero', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="text-sm md:text-base hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </motion.ul>
      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden menu-glass mt-2 p-4 rounded-md absolute top-full right-4 w-48"
        >
          {['hero', 'about', 'projects', 'contact'].map((section) => (
            <li key={section} className="mb-2 last:mb-0">
              <button
                onClick={() => scrollToSection(section)}
                className="text-base w-full text-left hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Header;