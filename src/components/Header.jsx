import { motion } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    console.log(`Scrolling to ${id}`); // Debug log
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth <= 768) {
      console.log('Closing menu on mobile'); // Debug log
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    console.log('Toggling menu, isMenuOpen:', !isMenuOpen); // Debug log
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full glass z-50 p-4 flex justify-between items-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onClick={() => scrollToSection('hero')}
        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer text-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
      >
        My Portfolio
      </motion.h1>
      <div className="md:hidden relative">
        <button
          onClick={handleMenuToggle}
          className="text-3xl focus:outline-none hover:text-primary transition-colors text-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
          aria-label="Toggle menu"
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
              className="text-sm md:text-base hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300 text-shadow-[0_0_8px_rgba(0,255,255,0.2)]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </motion.ul>
      {isMenuOpen && (
        <ul
          className="md:hidden menu-glass p-4 rounded-md absolute top-full right-4 w-48 z-60 bg-opacity-90"
          style={{ background: 'rgba(255, 255, 255, 0.05)', minHeight: 'auto' }} // Removed motion for testing
        >
          {['hero', 'about', 'projects', 'contact'].map((section) => (
            <li key={section} className="mb-2 last:mb-0">
              <button
                onClick={() => scrollToSection(section)}
                className="text-base w-full text-left hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300 text-shadow-[0_0_8px_rgba(0,255,255,0.2)]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}

export default Header;